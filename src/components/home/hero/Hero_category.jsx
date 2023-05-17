import React from 'react';

const Hero_category = () => {
    const categories = [
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

    return (
        <div>
            <h1 className='bg-primary text-center text-2xl font-bold py-4'>Categories</h1>
            <div className="h-full">
                <ul>
                    {categories.map((category) => (
                        <li className={`text-center py-5`} style={{ backgroundColor: category.bg }} key={category.slug}>
                            <a href={`/category/${category.slug}`} className='hover:text-primary text-white font-medium duration-300'>{category.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Hero_category;
