import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import ShopCard from './ShopCard';

const toyCategories = [
  'Vehicle',
  'Aircraft',
  'Watercraft',
  'Construction',
  'Space'
];

const ShopByCategory = () => {
  const [value, setValue] = useState(0);
  const [allToys, setAllToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/all-toys')
      .then(res => res.json())
      .then(data => {
        setAllToys(data);
        setFilteredToys(data.filter(toy => toy.subCategory === toyCategories[0]));
      });
  }, []);

  useEffect(() => {
    const category = toyCategories[value];
    const remaining = allToys.filter(toy => toy.subCategory === category);
    setFilteredToys(remaining);
  }, [value, allToys]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            {toyCategories.map((category, index) => (
              <Tab key={index} label={category} value={index} />
            ))}
          </Tabs>
        </Box>
        {/* Render the corresponding filtered toys */}
        <div  className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
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
      </Box>
    </div>
  );
};

export default ShopByCategory;
