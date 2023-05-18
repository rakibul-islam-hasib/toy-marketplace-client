import React, { useEffect } from 'react';
import Hero from './hero/Hero';
import Service from './services/Service';

const Home = () => {
    document.title = 'Zooming Wheels | Home';
    return (
        <div>
            <Hero />
            <div className="">
            </div>
        </div>
    );
};

export default Home;