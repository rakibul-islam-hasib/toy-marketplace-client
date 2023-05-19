import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Pagination, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
    const [data, setData] = useState([]);
    const [getTotal, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    let itemsPerPage = 10;
    const totalPages = Math.ceil(getTotal / itemsPerPage);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user-toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // setData(data)
                setTotal(data.length)
                // console.log(data)
            })
    }, [])
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
                                        <span className="bg-green-500 mr-3 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                        <span onClick={() => handelDelete(toy._id)} className="bg-red-500 cursor-pointer text-white py-1 px-2 rounded-full text-xs">Delete</span>
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