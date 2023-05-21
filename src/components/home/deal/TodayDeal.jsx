import React, { useEffect, useState } from 'react';
import ShopCard from '../ShopCard';
import DealCard from './DealCard';

const TodayDeal = () => {
    const [data, setData] = useState([]); 

    useEffect(()=>{
        fetch('https://zooming-wheels.vercel.app/api/today-deal')
        .then(res => res.json())
        .then(data => setData(data))
    },[])


    return (
        <div>
            <div  className="text-center  mx-auto mt-16">
                <h1 className='text-5xl mb-3 uppercase font-catamaran font-bold'>Today's Deals</h1>
                <div className="w-[40%] mx-auto">
                    <p className='my-7 text-sm'>Every week, we bring you a carefully curated selection of the hottest and most popular toys that will ignite your child's imagination and bring joy to their playtime. Our team of toy experts scours the market to handpick the best toys, ensuring that each item is of the highest quality and designed to provide endless hours of fun.</p>
                </div>
                <div className="flex justify-between items-center flex-wrap w-[80%] mx-auto">
                    <button className='bg-[#FFD814] text-white px-10 py-3 rounded-full'>Shop Now</button>
                    <h1 className=''>Visit daily for best offer</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto  gap-3">
                {
                    data.map(item => <DealCard key={item._id} toy={item} />)
                }
            </div>

        </div>
    );
};

export default TodayDeal;