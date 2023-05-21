import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

const images = [
    'https://i.ibb.co/F4hcMk7/pexels-pixabay-163768-min.jpg',
    'https://i.ibb.co/y4mKH54/pexels-nubia-navarro-nubikini-981588-min.jpg',
    'https://i.ibb.co/KL92z8B/pexels-bhupendra-singh-3358482.jpg',
    'https://i.ibb.co/4mf3gcd/pexels-nubia-navarro-nubikini-1522186.jpg',
    'https://i.ibb.co/51wz2Fn/pexels-the-lazy-artist-gallery-2527939.jpg',
    'https://i.ibb.co/cLvJXby/pexels-polesie-toys-4491565-min.jpg',


]

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
const PhotoGallery = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <Swiper effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    images.map(img => <SwiperSlide className='swiper-slide-img' key={img}>
                        <img loading='lazy' src={img} alt="" />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default PhotoGallery;