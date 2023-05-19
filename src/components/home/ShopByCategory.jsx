import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
  return (
    <div className='my-20 w-[90%] mx-auto'>
      <Tabs>
        <TabList>
          {toyVehicles.map((vehicle, index) => (
            <Tab key={index}>{vehicle.category}</Tab>
          ))}
        </TabList>

        {toyVehicles.map((vehicle, index) => (
          <TabPanel key={index}>
            <Tabs>
              <TabList>
                {vehicle.subcategories.map((subcategory, subIndex) => (
                  <Tab key={subIndex}>{subcategory}</Tab>
                ))}
              </TabList>

              {vehicle.subcategories.map((subcategory, subIndex) => (
                <TabPanel key={subIndex}>
                  <ShopCard />
                  {/* Render additional content related to the subcategory */}
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
