import React, { useEffect } from 'react';
import Hero from './hero/Hero';
import ShopByCategory from './ShopByCategory';
import Service from './services/Offer';
const Home = () => {
    document.title = 'Zooming Wheels | Home';
    return (
        <div>
            <Hero />
            <Service />
            <ShopByCategory />
        </div>
    );
};

export default Home;