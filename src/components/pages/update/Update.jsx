import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
// import { AuthContext } from '../../provider/AuthProvider';
import { motion } from 'framer-motion';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
const toyVehicles = [
    {
        category: 'Vehicle',
        subcategories: ['Car', 'Bus', 'Truck', 'Motorcycle']
    },
    {
        category: 'Aircraft',
        subcategories: ['Helicopter', 'Airplane', 'Drone', 'Rocket']
    },
    {
        category: 'Watercraft',
        subcategories: ['Boat', 'Ship', 'Submarine', 'Jet Ski']
    },
    {
        category: 'Construction',
        subcategories: ['Excavator', 'Crane', 'Bulldozer', 'Dump Truck']
    },
    {
        category: 'Space',
        subcategories: ['Satellite', 'Space Shuttle', 'Rover', 'Rocket']
    }
];
const Update = () => {
    const nameRef = useRef(null);
    const { user } = useContext(AuthContext);
    const data = useLoaderData(); 
    console.log("🚀 ~ file: Update.jsx:34 ~ Update ~ data:", data)
    const [category, setCategory] = useState('');
    const [subcategories, setSubcategories] = useState([
        'Car',
        'Bus',
        'Truck',
        'Motorcycle',
    ]);

    const handelCategoryChange = e => {
        setCategory(e.target.value);
        const selectedCategory = toyVehicles.find(
            vehicle => vehicle.category === e.target.value
        );
        if (selectedCategory) {
            setSubcategories(selectedCategory.subcategories);
        } else {
            setSubcategories([]);
        }
    };

    const handelFromSubmit = e => {
        e.preventDefault();
    };

    useEffect(() => {
        document.title = 'Zooming Wheels | Update Toy';
    }, []);
    
    return (
        <div className='mb-14'>
            <div className="mb-12">
                <h1 className='text-5xl mt-11 mb-5 hover:text-secondary duration-300 cursor-pointer text-center'>Sell your toys</h1>
                <p className='text-base text-center text-secondary hover:text-primary cursor-pointer duration-300'>Please fill this form to sell your toys</p>
            </div>
            <form onSubmit={handelFromSubmit} className='w-[80%] mx-auto'>
              
                <h1 className='text-center my-4'>Toys Info</h1>
                <div className="flex gap-7">
                    <TextField
                        id="outlined-basic"
                        label="Toy Name"
                        name='toyName'
                        required
                        defaultValue={data.toyName}
                        variant="outlined"
                        focused
                        className='w-full mb-5'
                        inputRef={nameRef}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Photo URL"
                        name='photo'
                        defaultValue={data.photo}
                        required
                        focused
                        variant="outlined"
                        className='w-full mb-5'
                    />
                </div>
                <h1 className='text-center my-4'>Category And Sub Category</h1>
                <div className="flex gap-7">
                    <Box sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                required
                                label="Category"
                                name='category'
                                defaultValue={data.category}
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
                    <Box sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                required
                                defaultValue={data.subCategory}
                                label="Sub Category"
                                name='subCategory'
                            >
                                {subcategories.map((subCategory, index) => (
                                    <MenuItem key={index} value={subCategory}>
                                        {subCategory}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <h1 className='text-center my-4'>Price & Ratings</h1>
                <div className="flex gap-7">
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        required
                        defaultValue={data.price}
                        name='price'
                        variant="outlined"
                        className='w-full mb-5'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Ratings"
                        required
                        defaultValue={data.ratings}
                        name='ratings'
                        variant="outlined"
                        className='w-full mb-5'
                    />
                </div>
                <div className="">
                    <h1 className='text-center my-4'>Quantity</h1>
                    <div className="flex gap-7">
                        <TextField
                            id="outlined-basic"
                            name='quantity'
                            defaultValue={data.quantity}
                            required
                            label="Quantity"
                            variant="outlined"
                            className='w-full mb-5'
                        />
                    </div>
                    <legend>Description</legend>
                    <textarea
                        className='w-full resize-none border-2 outline-none rounded-md p-3   mb-5'
                        name="description"
                        required
                        defaultValue={data.description}
                        placeholder='Description'
                        id="description"
                        cols="30"
                        rows="8"
                    ></textarea>
                </div>
                <h1 className='mb-5 text-sm text-center text-red-500'>NOTE : SELLER INFO CANNOT CHANGEABLE</h1>
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

export default Update;