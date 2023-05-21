import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
const Company = () => {
    return (
        <div className='my-20'>
            <div className="text-center">
                <h1 className='text-4xl font-catamaran font-bold text-center'>We are trusted by </h1>
                <p className='my-3'>We are trusted by parents and children alike, offering a wide range of high-quality toys that ignite imagination and inspire endless hours of play.</p>
            </div>
            <Swiper
            className='w-[80%] mt-12 mx-auto items-center'
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className="">
                        <img src="https://i.ibb.co/6gs291M/5a1c364cf65d84088faf1400.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://i.ibb.co/kH3591L/600f2e79fcd2b50004308411.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://i.ibb.co/kH3591L/600f2e79fcd2b50004308411.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://i.ibb.co/swC3RqF/pngegg.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://i.ibb.co/c1PvmpC/pngegg-1.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://i.ibb.co/1mLnXjn/62fcf5d11b464bd3c59eeda4.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://i.ibb.co/6gs291M/5a1c364cf65d84088faf1400.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <img src="https://i.ibb.co/6gs291M/5a1c364cf65d84088faf1400.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                    </div>
                </SwiperSlide>

            </Swiper>
            {/* <div className="flex">
                <div className="">
                    <img src="https://i.ibb.co/6gs291M/5a1c364cf65d84088faf1400.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/6gs291M/5a1c364cf65d84088faf1400.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/6gs291M/5a1c364cf65d84088faf1400.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/6gs291M/5a1c364cf65d84088faf1400.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                </div>
                <div className="">
                    <img src="https://i.ibb.co/6gs291M/5a1c364cf65d84088faf1400.png" alt="" className='w-[100px] grayscale hover:grayscale-0 duration-300 mx-auto' />
                </div>
            </div> */}

        </div>
    );
};

export default Company;