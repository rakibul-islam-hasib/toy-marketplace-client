import React, { useEffect } from 'react';
import Hero from './hero/Hero';

const Home = () => {
    document.title = 'Zooming Wheels | Home';
    return (
        <div>
            <Hero /> 
        </div>
    );
};

export default Home;