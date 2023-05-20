import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import ShopCard from './ShopCard';

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
      <div className="">
        <h1 className='text-5xl w-[60%] mx-auto my-3 text-center'>Shop By Category</h1>
        <p className='text-center my-6'>Explore a world of endless possibilities as you shop by category in our toy store. <br /> From action figures to puzzles, find the perfect toy for every child's interest and let their imaginations soar.</p>
      </div>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value} variant="scrollable"
            allowScrollButtonsMobile
            scrollButtons="auto" onChange={handleChange} aria-label="basic tabs example">
            {toyVehicles.map((vehicle, index) => (
              <Tab key={index} label={vehicle.category} value={index} />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={value}>
          <Tabs value={nestedValue} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile  onChange={handleChangeNested} aria-label="nested tabs example">
            {toyVehicles[value].subcategories.map((subcategory, index) => (
              <Tab key={index} label={subcategory} value={index} />
            ))}
          </Tabs>
          {/* Render the corresponding filtered toys */}
          <div className='flex flex-wrap gap-3'>
            {filteredToys.length === 0 ? (
              <div className="text-center">
                <h1 className='text-3xl text-red-500 text-center my-3'>No Item In this category</h1>
              </div>
            ) : (
              filteredToys.map(toy => (
                <ShopCard key={toy._id} toy={toy} />
              ))
            )}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

export default ShopByCategory;
