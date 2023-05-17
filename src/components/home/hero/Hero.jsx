import React from 'react';
import Hero_category from './Hero_category';
import HeroSlider from './HeroSlider';

const Hero = () => {
    return (
        <div className='grid w-full lg:min-h-[70vh] mx-auto grid-cols-5'>
            <div className="col-span-1">
                <Hero_category />
            </div>
            <div className="col-span-4">
                <HeroSlider />
            </div>
        </div>
    );
};

export default Hero;