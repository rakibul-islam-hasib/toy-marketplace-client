import React from 'react';

const Service = () => {
    return (
        <>
            <div className="text-center  mx-auto mt-16">
                <h1 className='text-5xl mb-3 uppercase font-catamaran font-bold'>Explore our weekly offer </h1>
                <div className="w-[40%] mx-auto">
                    <p className='my-7 text-sm'>Every week, we bring you a carefully curated selection of the hottest and most popular toys that will ignite your child's imagination and bring joy to their playtime. Our team of toy experts scours the market to handpick the best toys, ensuring that each item is of the highest quality and designed to provide endless hours of fun.</p>
                </div>
            </div>

            <div className='w-[80%] flex justify-center mt-20 gap-3 mx-auto'>
                <div className="">
                    <img src="https://i.ibb.co/NYfWMCs/banner-2-809b2798-0785-402a-8296-0bb8f0147c74-1920x1920.jpg" alt="" />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/C86pG29/banner-1-a62376f2-b44a-4dd6-ba45-67235bc9fa32-1920x1920.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Service;