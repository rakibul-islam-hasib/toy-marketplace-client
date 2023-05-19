import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Toys = () => {
    const total = useLoaderData();
    // const [total, setTotal] = useState(0);
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]); // [1,2,3,4,5,6,7,8,9,10
    const [pageNumbers, setPageNumbers] = useState([]);
    const totalPage = Math.ceil(total.totalToys / itemsPerPage);

    useEffect(() => {
        fetch(`http://localhost:5000/api/toys?limit=${itemsPerPage}&page=${currentPage}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [currentPage])
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    useEffect(() => {
        document.title = 'Zooming Wheels | All Toys';
    }, [])


    return (
        <div className='my-16'>
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Photo</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Seller</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Sub-category</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Price</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Available Quantity</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            data.map(toy => <tr key={toy._id}>
                                <td className="py-4 px-6 border-b border-gray-200">
                                    <img src={toy.photo} className='h-24 w-24' alt="" />
                                </td>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{toy.name}</td>
                                <td className="py-4 px-6 border-b border-gray-200">{toy.subCategory}</td>
                                <td className="py-4 px-6 border-b border-gray-200">{toy.price} $ only</td>
                                <td className="py-4 px-6 border-b border-gray-200">{toy.quantity} pcs</td>
                                <td className="py-4 px-6 border-b border-gray-200">
                                    <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center my-5">
                <Stack spacing={2}>
                    <Pagination count={totalPage} onChange={handlePageChange} color="secondary" />
                </Stack>
            </div>

        </div>
    );
};

export default Toys;