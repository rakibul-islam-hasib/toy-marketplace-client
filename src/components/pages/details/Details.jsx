import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();
    const { toyName, photo, name, category, price, quantity, ratings, subCategory, description , email } = data;
    useEffect(() => {
        document.title = `Zooming Wheels | ${toyName}`;
    }, [])
    return (
        <div className='w-[80%] my-12 mx-auto'>
            <div className="flex gap-9">
                <img src={photo} className='w-52 h-52' alt="" />
                <div className="">
                    <h1 className='text-5xl font-bold font-catamaran'>{toyName}</h1>
                    <div className="grid grid-cols-2">
                        <p className='text-base font-mono my-6'>By <span className='font-bubblegum duration-300 cursor-pointer font-bold'><span className='hover:text-secondary duration-300'>{name}</span>  &nbsp; <span className='font-catamaran hover:text-primary duration-300 text-sm'>({email})</span></span></p>
                        <p className='text-base font-catamaran my-6'>Category: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>{category}</span></p>
                        <p className='text-base font-catamaran my-6'>Sub Category: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>{subCategory}</span></p>
                        <p className='text-base font-catamaran my-6'>Price: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>${price}</span></p>
                        <p className='text-base font-catamaran my-6'>Quantity: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>{quantity}</span></p>
                        <p className='text-base font-catamaran my-6'>Ratings: <span className='font-bubblegum hover:text-secondary duration-300 cursor-pointer font-bold'>{ratings}</span></p>
                    </div>
                    <h1 className='text-base font-bold'>Description : </h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;