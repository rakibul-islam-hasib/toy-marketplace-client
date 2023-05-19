import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();
    const { toyName } = data;
    useEffect(()=>{
        document.title = `Zooming Wheels | ${toyName}` ;
    },[])
    return (
        <div>
            <h1>Details</h1>
        </div>
    );
};

export default Details;