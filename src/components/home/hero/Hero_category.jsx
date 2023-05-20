import React from 'react';

export const categories = [
    {
        name: 'Remote Control Cars',
        slug: 'remote-control-cars',
        bg: '#446C9A'
    },
    {
        name: 'Diecast Cars',
        slug: 'diecast-cars',
        bg: '#446C9A'
    },
    {
        name: 'Construction Vehicles',
        slug: 'construction-vehicles',
        bg: '#F5725E'
    },
    {
        name: 'Race Tracks',
        slug: 'race-tracks',
        bg: '#446C9A'
    },
    {
        name: 'Toy Car Sets',
        slug: 'toy-car-sets',
        bg: '#BD60C3'
    },
    {
        name: 'Pull-Back Cars',
        slug: 'pull-back-cars',
        bg: '#446C9A'
    }
];
const Hero_category = () => {

    return (
        <div className=''>
            <h1 className='bg-primary text-center text-2xl font-bold py-4'>Categories</h1>
            <div className="h-full">
                <ul>
                    {categories.map((category) => (
                        <li className={`text-center hover:bg-primary duration-500 py-5 bg-[#446C9A]`}  key={category.slug}>
                            <a href={`/category/${category.slug}`} className='hover:text-black text-white font-medium duration-300'>{category.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Hero_category;
