import React from 'react';

const Service = () => {
    const services = [
        {
            title: "Toy Sales",
            description: "Browse and purchase a wide variety of toys for all ages.",
            icon: "fa fa-shopping-cart",
            bg: "#9C29B2"
        },
        {
            title: "Toy Rentals",
            description: "Rent popular toys for a limited time to keep your child entertained.",
            icon: "fa fa-clock-o",
        },
        {
            title: "Toy Gift Cards",
            description: "Purchase gift cards that can be redeemed for any toy on our website.",
            icon: "fa fa-gift",
        },
        {
            title: "Toy Blog",
            description: "Explore our blog for articles on toy trends, parenting tips, and more.",
            icon: "fa fa-book",
        },
    ];

    return (
        <div className='my-9 lg:w-[90%] mx-auto'>
            <h1 className='text-center text-[#9C29B2] text-4xl'>Service We Provide</h1>
            <p className='text-5xl text-center my-7 leading-[60px]'>Providing Good Qualities <br /> For Your Loving Kids</p>
            <div className="grid grid-cols-4">
                <div  className='flex justify-center items-center'>
                    <div className='w-[250px] text-[#fe5d37] hover:text-white h-[350px] bg-[#ffe9e4] hover:bg-[#fe5d37] duration-300 rounded-[25px] flex flex-col text-center px-3 justify-center items-center'>
                        <h1 className='text-3xl font-catamaran font-bold'>Toy Car Sales</h1>
                        <p className='text-black hover:text-white'>Browse and purchase a wide variety of toy cars for all ages.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[250px] h-[350px] bg-[#ffe9e4] hover:bg-[#fe5d37] duration-300 rounded-[25px] flex justify-center items-center'>
                        <p>Toy Blog</p>
                    </div>
                </div>
                <div  className='flex justify-center items-center'>
                    <div className='w-[250px] h-[350px] bg-[#ffe9e4] hover:bg-[#fe5d37] duration-300 rounded-[25px] flex justify-center items-center'>
                        <p>Toy Blog</p>
                    </div>
                </div>
                <div  className='flex justify-center items-center'>
                    <div className='w-[250px] h-[350px] bg-[#ffe9e4] hover:bg-[#fe5d37] duration-300 rounded-[25px] flex justify-center items-center'>
                        <p>Toy Blog</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;