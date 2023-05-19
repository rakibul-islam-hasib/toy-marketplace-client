import React from 'react';
import bgImg from '../../../assets/hero_bg_1.jpg'
const HeroSlider = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bgImg})` }} className='w-full bg-fixed bg-cover h-full  flex justify-center items-center  mx-auto'>

                <div className=" text-center h-full w-full bg-black bg-opacity-70 text-white flex items-center">
                    <div className="w-[80%] mx-auto">
                        <h1 className='text-7xl font-bold font-catamaran  mb-3'>Zooming Wheels</h1>
                        <p className='text-base font-catamaran my-6'>Zooming wheels is an online platform connecting food enthusiasts with talented chefs worldwide. Explore new flavors and cuisines, improve your cooking skills with recipes, tutorials, and expert advice.</p>
                        <button className='bg-secondary hover:bg-green-400 duration-500 px-11 py-3 rounded-full'>Get Started</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeroSlider;