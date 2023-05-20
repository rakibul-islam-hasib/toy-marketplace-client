import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteSweep } from 'react-icons/md';
import Swal from 'sweetalert2';

const MyToys = () => {
    const [data, setData] = useState([]);
    const [getTotal, setTotal] = useState(0);
    const [age, setSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    let itemsPerPage = 10;
    const totalPages = Math.ceil(getTotal / itemsPerPage);
    const { user } = useContext(AuthContext);
    const handleChange = (event) => {
        setSort(event.target.value);
    };
    useEffect(() => {
        fetch(`http://localhost:5000/api/user-toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // setData(data)
                setTotal(data.length)
                // console.log(data)
            })
    }, [data])
    useEffect(() => {
        document.title = `My Toys | Zooming Wheels`;
        fetch(`http://localhost:5000/api/user-toys?email=${user.email}&page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [currentPage]);


    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/api/delete-toy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            const remaining = data.filter(toy => toy._id !== id);
                            setData(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })
        console.log(id)

    }
    return (
        <div className='my-11'>
            {/* <h1 className='text-3xl text-center'>My Toys are here </h1> */}
            <div className="w-[80%] mx-auto gap-5 flex">
                <img
                    onContextMenu={(e) => e.preventDefault()}
                    className='h-32 w-32'
                    src={user.photoURL ?
                        user.photoURL : 'https://i.ibb.co/5KZqJ8F/icons8-name-480.png'} alt="" />
                <div className="">
                    <h1 className='text-3xl '>{user.displayName}</h1>
                    <h1 className='text-sm '><span>Email : </span><span className='hover:text-primary duration-300'>{user.email}</span> </h1>
                    <p>Total Item : {getTotal}</p>
                </div>
                <div className="">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
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
                        </FormControl>
                    </Box>
                </div>

            </div>
            <div className="my-12">
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="w-1/4 py-6 px-6 text-[14px] text-left text-gray-600 font-bold uppercase">Photo</th>
                                <th className="w-1/4 py-6 px-6 text-[14px] text-left text-gray-600 font-bold uppercase">Toy Name</th>
                                <th className="w-1/4 py-6 px-6 text-[14px] text-left text-gray-600 font-bold uppercase">Sub-category</th>
                                <th className="w-1/4 py-6 px-6 text-[14px] text-left text-gray-600 font-bold uppercase">Price</th>
                                <th className="w-1/4 py-6 px-6 text-[14px] text-left text-gray-600 font-bold uppercase">Available Quantity</th>
                                <th className="w-1/4 py-6 px-6 text-[14px] text-left text-gray-600 font-bold uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                data.map(toy => <tr onContextMenu={(e) => e.preventDefault()} key={toy._id}>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        <img src={toy.photo} className='h-24 w-24' alt="" />
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">{toy.toyName}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{toy.subCategory}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{toy.price} $ only</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{toy.quantity} pcs</td>
                                    <td className="py-4 px-6 border-b border-gray-200">
                                        <span
                                            onClick={() => navigate(`/update/${toy._id}`)}
                                            className="bg-green-500 cursor-pointer mr-3 inline-flex items-center gap-2 text-white py-1 px-2 rounded-full text-xs"><AiFillEdit /> Edit</span>
                                        <span
                                            onClick={() => handelDelete(toy._id)}
                                            className="bg-red-500 inline-flex items-center gap-2 cursor-pointer text-white py-1 px-2 rounded-full text-xs"><MdDeleteSweep /> Delete</span>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {/* Pagination here  */}

            <div className="flex justify-center items-center my-5">
                <Stack spacing={2}>
                    <Pagination count={totalPages} onChange={handlePageChange} color="secondary" />
                </Stack>
            </div>

        </div>
    );
};

export default MyToys;