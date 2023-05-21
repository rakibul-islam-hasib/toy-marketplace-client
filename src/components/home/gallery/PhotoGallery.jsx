import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const PhotoGallery = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='' src="https://i.ibb.co/F4hcMk7/pexels-pixabay-163768-min.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://i.ibb.co/y4mKH54/pexels-nubia-navarro-nubikini-981588-min.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://i.ibb.co/KL92z8B/pexels-bhupendra-singh-3358482.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://i.ibb.co/4mf3gcd/pexels-nubia-navarro-nubikini-1522186.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PhotoGallery;