import React, { useEffect } from 'react';
import Hero from './hero/Hero';
import ShopByCategory from './ShopByCategory';
const Home = () => {
    document.title = 'Zooming Wheels | Home';
    return (
        <div>
            <Hero />
            <ShopByCategory />
        </div>
    );
};

export default Home;