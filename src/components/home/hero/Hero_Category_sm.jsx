import React from 'react';
import { categories } from './Hero_category';

const Hero_Category_sm = () => {
    return (
        <div className='block md:hidden'>
            {
                categories.map((category) => (
                    <ul className='text-center flex flex-col hover:bg-primary text-black duration-300 hover:text-white  border gap-3 py-5 bg-[#446C9A]' key={category.slug}>
                        <li href={`/category/${category.slug}`} className=' font-medium duration-300'>{category.name}</li>
                    </ul>
                ))

            }
        </div>
    );
};

export default Hero_Category_sm;