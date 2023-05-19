import React from 'react';
import bgImg from '../../../assets/hero_bg_1.jpg'
const HeroSlider2 = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className='w-full bg-fixed bg-cover h-full  flex justify-center items-center  mx-auto'>

            <div className=" text-center h-full w-full bg-black bg-opacity-70 text-white flex items-center">
                <div className="w-[80%] mx-auto">
                    <h1 className='text-7xl font-bold font-catamaran  mb-3'>Wheels of Wonder Toy Emporium</h1>
                    <p className='text-base font-catamaran my-6'>At Zooming Wheels, we prioritize customer satisfaction and strive to provide a seamless shopping experience. We offer secure payment options, reliable shipping services, and a responsive customer support team to address any queries or concerns.</p>
                    <button className='bg-primary px-11 py-3 rounded-full'>Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default HeroSlider2;