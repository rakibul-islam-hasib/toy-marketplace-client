import React, { useEffect } from 'react';
import Hero from './hero/Hero';
import ShopByCategory from './ShopByCategory';
import Service from './services/Offer';
import TodayDeal from './deal/TodayDeal';
import Gallery from '../gallery/Gallery';
const Home = () => {
    document.title = 'Zooming Wheels | Home';
    return (
        <div>
            <Hero />
            <Service />
            <TodayDeal />
            <ShopByCategory />
            <Gallery /> 
        </div>
    );
};

export default Home;