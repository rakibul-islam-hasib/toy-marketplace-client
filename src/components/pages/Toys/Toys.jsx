import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Toys = () => {
    const getTotal = useLoaderData();
    const itemsPerPage = 10;
    const [total, setTotal] = useState(0)
    // console.log("🚀 ~ file: Toys.jsx:9 ~ Toys ~ total:", total)
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]); // [1,2,3,4,5,6,7,8,9,10
    const totalPages = Math.ceil(getTotal.totalToys / itemsPerPage);
    const [totalPage, setTotalPAge] = useState(totalPages); 

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    // !Fetch all data
    useEffect(() => {
        fetch(`http://localhost:5000/api/toys?limit=${itemsPerPage}&page=${currentPage}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [currentPage])
    // !Fetch search data 
    useEffect(() => {
        fetch(`http://localhost:5000/api/search?search=${searchQuery}&limit=${itemsPerPage}&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                // setTotalPAge(Math.ceil(data.length / itemsPerPage))
                // setTotal(data.length)
            })
    }, [searchQuery])
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    useEffect(() => {
        document.title = 'Zooming Wheels | All Toys';
    }, [])


    return (
        <div className='my-16'>
            {/* Search bar */}
            <div className='my-8 w-[25%] mx-auto'>
                <label htmlFor="input-9" className="block text-sm font-medium text-gray-700 dark:text-gray-100">Email</label>
                <div className="flex items-center mt-1">
                    <input onChange={(e) => setSearchQuery(e.target.value)} type="text" className="w-full h-10 px-3 text-xs text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm" placeholder="user@mail.com" />
                    <button className="h-10 px-4 text-xs bg-blue-500 border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">Subscribe</button>
                </div>
            </div>

            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="w-1/4 py-6 px-6 text-[14px] text-left text-gray-600 font-bold uppercase">Photo</th>
                            <th className="w-1/4 py-6 px-6 text-[14px] text-left text-gray-600 font-bold uppercase">Seller</th>
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
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{toy.name}</td>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">{toy.toyName}</td>
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