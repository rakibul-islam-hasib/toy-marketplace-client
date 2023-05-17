import React from 'react';
import img from '../../assets/jaconda-17.gif';
import Button from '../hooks/Button';
import { useNavigate } from 'react-router-dom';
const Error = () => {
    document.title = 'Zooming Wheels | Error';
    const navigate = useNavigate(); 
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="w-[50%] flex flex-col justify-center items-center h-1/2">
                <h1 className='text-4xl font-bold'>Ops... This page not found</h1>
                <img className='w-[50%]' src={img} alt="" />
                <Button onClick={()=>navigate('/')}>Go To Home</Button>
            </div>
        </div>
    );
};

export default Error;