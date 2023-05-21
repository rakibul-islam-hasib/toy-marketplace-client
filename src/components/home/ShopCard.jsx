import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiQuantcast } from 'react-icons/si';
import { Tooltip } from '@mui/material';
import { BsPlus } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
const ShopCard = ({ toy }) => {
    const { name, price, photo, toyName, quantity, _id, ratings } = toy;
    const navigate = useNavigate();
    return (
        <div className="min-w-[250px] mt-5 bg-white shadow rounded">
            <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${photo})` }}>

                <div>
                    <span
                        className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                        available
                    </span>
                </div>
            </div>
            <div className="p-4 flex flex-col items-center">
                <p className="text-gray-400 font-light text-xs text-center">By : {name}</p>
                <h1 className="text-gray-800 text-center mt-1">{toyName}</h1>
                <p className="text-center text-gray-800 mt-1">$ {price}</p>
                <p className="text-center inline-flex items-center gap-3 text-gray-800 mt-1">Ratings : &nbsp; {ratings} <AiFillStar className='text-yellow-400' /></p>

                <Tooltip title="Quantity">
                    <div className="inline-flex items-center mt-2">
                        <button
                            className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                            <SiQuantcast className='h-6 w-4' />
                        </button>
                        <div
                            className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                            {quantity}
                        </div>
                        <button
                            className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                            <BsPlus className='h-6 w-6' />
                        </button>
                    </div>
                </Tooltip>

                <button
                    onClick={() => navigate(`/toy/${_id}`)}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                    View Details
                </button>
            </div>
        </div >
    );
};

export default ShopCard;