import React from 'react';
import { categories } from './Hero_category';

const Hero_Category_sm = () => {
    return (
        <div className='block md:hidden'>
            {
                categories.map((category) => (
                    <ul className='text-center flex flex-col  border gap-3 py-5' style={{backgroundColor : category.bg}} key={category.slug}>
                        <li href={`/category/${category.slug}`} className='hover:text-primary font-medium duration-300'>{category.name}</li>
                    </ul>
                ))

            }
        </div>
    );
};

export default Hero_Category_sm;