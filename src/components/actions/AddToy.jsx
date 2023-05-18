import { TextField } from '@mui/material';
import React, { useEffect, useRef } from 'react';

const AddToy = () => {

    const nameRef = useRef(null);



    useEffect(() => {
        document.title = 'Zooming Wheels | Add Toy';
    }, [])
    return (
        <div>
            <form class="bg-white p-4 rounded-lg">
                <div class="relative bg-inherit">
                    <input
                        ref={nameRef}                    
                        name="username"
                        type="text"
                        class="bg-transparent
                        peer
                         h-10 w-72 
                         rounded-lg
                          text-black
                           placeholder-transparent
                            ring-2 px-3 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Type inside me" />
                    <label for="username" onClick={()=>nameRef.current.focus()} class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
                        Type inside Name 
                    </label>
                </div>
                <div class="relative bg-inherit">
                    <input
                        name="email"
                        type="text"
                        class="bg-transparent
                        peer
                         h-10 w-72 
                         rounded-lg
                          text-gray-200
                           placeholder-transparent
                            ring-2 px-3 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Type inside me" />
                    <label for="email" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
                        Type inside me
                    </label>
                </div>
                <div class="relative bg-inherit">
                    <input
                        name="password"
                        type="text"
                        class="bg-transparent
                        peer
                         h-10 w-72 
                         rounded-lg
                          text-gray-200
                           placeholder-transparent
                            ring-2 px-3 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Type inside me" />
                    <label for="password" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
                        Type inside me
                    </label>
                </div>
            </form>
        </div>
    );
};

export default AddToy;