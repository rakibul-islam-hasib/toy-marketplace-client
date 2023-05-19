import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const toyVehicles = [
  {
    category: 'Vehicle',
    subcategories: ['Car', 'Bus', 'Truck', 'Motorcycle']
  },
  {
    category: 'Aircraft',
    subcategories: ['Helicopter', 'Airplane', 'Drone', 'Rocket']
  },
  {
    category: 'Watercraft',
    subcategories: ['Boat', 'Ship', 'Submarine', 'Jet Ski']
  },
  {
    category: 'Construction',
    subcategories: ['Excavator', 'Crane', 'Bulldozer', 'Dump Truck']
  },
  {
    category: 'Space',
    subcategories: ['Satellite', 'Space Shuttle', 'Rover', 'Rocket']
  }
];

const ShopByCategory = () => {
  const [value, setValue] = useState(0);
  const [nestedValue, setNestedValue] = useState(0);
  const [allToys, setAllToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  console.log("🚀 ~ file: ShopByCategory.jsx:34 ~ ShopByCategory ~ filteredToys:", filteredToys)

  useEffect(() => {
    fetch('http://localhost:5000/api/all-toys')
      .then(res => res.json())
      .then(data => setAllToys(data))
  }, []);

  useEffect(() => {
    if (nestedValue >= 0 && nestedValue < toyVehicles[value].subcategories.length) {
      const subcategory = toyVehicles[value].subcategories[nestedValue];
      const remaining = allToys.filter(toy => toy.subCategory === subcategory);
      setFilteredToys(remaining);
    }
  }, [nestedValue, allToys, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeNested = (event, newValue) => {
    setNestedValue(newValue);
  };

  const TabPanel = ({ value, index, children }) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  };

  return (
    <div className='w-[90%] mx-auto my-12'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {toyVehicles.map((vehicle, index) => (
              <Tab key={index} label={vehicle.category} value={index} />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={value}>
          <Tabs value={nestedValue} onChange={handleChangeNested} aria-label="nested tabs example">
            {toyVehicles[value].subcategories.map((subcategory, index) => (
              <Tab key={index} label={subcategory} value={index} />
            ))}
          </Tabs>
          {/* Render the corresponding filtered toys */}
          <div>
            {filteredToys.map(toy => (
              <div key={toy._id}>{toy.name}</div>
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

export default ShopByCategory;
