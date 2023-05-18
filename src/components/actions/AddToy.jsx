import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const AddToy = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const [age, setAge] = React.useState('');
    const { user } = useContext(AuthContext);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    useEffect(() => {
        document.title = 'Zooming Wheels | Add Toy';
    }, [])
    return (
        <div>
            <div className="mb-12">
                <h1 className='text-5xl mt-11 mb-5 hover:text-secondary duration-300 cursor-pointer text-center'>Sell your toys</h1>
                <p className='text-base text-center text-secondary hover:text-primary cursor-pointer duration-300'>Please fill this form to sell your toys</p>
            </div>
            <form className='w-[80%] mx-auto' action="">
                <h1 className='text-center my-4'>Seller Info</h1>
                <div className="flex gap-7">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        className='w-full mb-5'
                        inputRef={nameRef}
                        defaultValue={user.displayName}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        className='w-full mb-5'
                        // inputRef={nameRef}
                        defaultValue={user?.email ? user.email : ''}
                    />
                </div>
                <h1 className='text-center my-4'>Toys Info</h1>
                <div className="flex gap-7">
                    <TextField
                        id="outlined-basic"
                        label="Toy Name"
                        variant="outlined"
                        className='w-full mb-5'
                        inputRef={nameRef}
                    />
                    <Box sx={{ minWidth: 288 }}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Box>
                </div>
            </form>
        </div>
    );
};

export default AddToy;