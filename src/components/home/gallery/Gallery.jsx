import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import PhotoGallery from './PhotoGallery';

const Gallery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://zooming-wheels.vercel.app/api/today-deal')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (
        <div className='my-32'>
            <h1 className='text-4xl text-center'>Our Featured Gallery </h1>
            <div className="w-[60%] mx-auto text-center my-4">
                <p className='text-sm'>From sleek sports cars that hug the curves of imaginary tracks to powerful monster trucks that conquer any terrain, our gallery showcases an extensive selection of toy cars that will ignite the thrill of racing in young hearts. Choose from an array of iconic models, including classic muscle cars, rugged off-road vehicles, and futuristic super cars.</p>
            </div>
            {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[90%] mx-auto">
                {
                    data.map(item => <div
                     className='w-[90%] 
                     border hover:border-0 hover:-translate-y-3 duration-300 px-5 relative mx-auto my-4' key={item._id}>
                        <img src={item.photo} alt="" className='sm:max-w-[250px] w-full min-h-[300px]' />
                        <div className="border-y py-10 duration-300  absolute inset-0 bg-black text-white text-center bg-opacity-70 opacity-0 hover:opacity-100 ">
                            <h1 className='text-2xl'>{item.toyName}</h1>
                            <p className='text-sm'>By : {item.name}</p>
                            <p className='text-sm'>Price : {item.price} $</p>
                            <p className='text-sm inline-flex items-center gap-2'>Ratings : {item.ratings} <FaStar className='text-yellow-300' /></p>
                        </div>
                    </div>)
                }
            </div> */}
            <PhotoGallery />


        </div>
    );
};

export default Gallery;