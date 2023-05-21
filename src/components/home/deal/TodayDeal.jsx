import React, { useEffect, useState } from 'react';
import ShopCard from '../ShopCard';
import DealCard from './DealCard';
import { FaStar } from 'react-icons/fa';

const TodayDeal = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://zooming-wheels.vercel.app/api/today-deal')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div>
            <div className="text-center  mx-auto mt-16">
                <h1 className='text-5xl mb-3 uppercase font-catamaran font-bold'>Today's Deals</h1>
                <div className="w-[40%] mx-auto">
                    <p className='my-7 text-sm'>Every week, we bring you a carefully curated selection of the hottest and most popular toys that will ignite your child's imagination and bring joy to their playtime. Our team of toy experts scours the market to handpick the best toys, ensuring that each item is of the highest quality and designed to provide endless hours of fun.</p>
                </div>
                <div className="flex justify-between items-center flex-wrap w-[80%] mx-auto">
                    <button className='bg-[#FFD814] text-white px-10 py-3 rounded-full'>Shop Now</button>
                    <h1 className=''>Visit daily for best offer</h1>
                </div>
            </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[90%] mx-auto">
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
                </div>

        </div>
    );
};

export default TodayDeal;