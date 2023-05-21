import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import React, { useContext, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { motion } from 'framer-motion';

const toyVehicles = [
    {
        category: 'Vehicle',
    },
    {
        category: 'Aircraft',
    },
    {
        category: 'Watercraft',
    },
    {
        category: 'Construction',
    },
    {
        category: 'Space',
    }
];

const AddToy = () => {
    const nameRef = useRef(null);
    const { user } = useContext(AuthContext);
    const [category, setCategory] = useState('Vehicle');
    const handelCategoryChange = e => {
        setCategory(e.target.value);
    };

    const handelFromSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        fetch(`http://localhost:5000/api/add-toy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    e.target.reset();
                    Swal.fire(
                        'Good job!',
                        'Your toys successfully added to our database!',
                        'success'
                    );
                }
            });
        console.log(data); 
    };

    useEffect(() => {
        document.title = 'Zooming Wheels | Add Toy';
    }, []);

    return (
        <div className='mb-14'>
            <div className="mb-12">
                <h1 className='text-5xl mt-11 mb-5 hover:text-secondary duration-300 cursor-pointer text-center'>Sell your toys</h1>
                <p className='text-base text-center text-secondary hover:text-primary cursor-pointer duration-300'>Please fill this form to sell your toys</p>
            </div>
            <form onSubmit={handelFromSubmit} className='w-[80%] mx-auto'>
                <h1 className='text-center my-4'>Seller Info</h1>
                <div className="flex gap-7">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        required
                        name='name'
                        variant="outlined"
                        className='w-full mb-5'
                        inputRef={nameRef}
                        defaultValue={user.displayName}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        name='email'
                        variant="outlined"
                        className='w-full mb-5'
                        required
                        defaultValue={user?.email ? user.email : ''}
                    />
                </div>
                <h1 className='text-center my-4'>Toys Info</h1>
                <div className="flex gap-7">
                    <TextField
                        id="outlined-basic"
                        label="Toy Name"
                        name='toyName'
                        required
                        variant="outlined"
                        className='w-full mb-5'
                        inputRef={nameRef}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Photo URL"
                        name='photo'
                        required
                        variant="outlined"
                        className='w-full mb-5'
                    />
                </div>
                <h1 className='text-center my-4'>Category And Quantity </h1>
                <div className="flex gap-7">
                    <Box sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                required
                                label="Category"
                                name='subCategory'
                                defaultValue={'Vehicle'}
                                onChange={handelCategoryChange}
                            >
                                {toyVehicles.map((vehicle, index) => (
                                    <MenuItem key={index} value={vehicle.category}>
                                        {vehicle.category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        id="outlined-basic"
                        name='quantity'
                        required
                        label="Quantity"
                        variant="outlined"
                        className='w-full mb-5'
                    />
                </div>
                <h1 className='text-center my-4'>Price & Ratings</h1>
                <div className="flex gap-7">
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        required
                        name='price'
                        variant="outlined"
                        className='w-full mb-5'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Ratings"
                        required
                        name='ratings'
                        variant="outlined"
                        className='w-full mb-5'
                    />
                </div>
                <div className="">
                    <legend>Description</legend>
                    <textarea
                        className='w-full resize-none border-2 outline-none rounded-md p-3   mb-5'
                        name="description"
                        required
                        placeholder='Description'
                        id="description"
                        cols="30"
                        rows="8"
                    ></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                    type='submit'
                    className='bg-blue-600 hover:bg-primary hover:text-white duration-500 px-5 w-full py-2 text-black rounded-lg font-bold'
                >
                    Submit
                </motion.button>
            </form>
        </div>
    );
};

export default AddToy;
