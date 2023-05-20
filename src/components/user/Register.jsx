import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ScaleLoader } from 'react-spinners';
import GoogleGithubLogin from './GoogleGithubLogin';
const Register = () => {

    // Change the title of the page
    useEffect(() => {
        document.title = 'Zooming Wheels | Register';
    }, [])
    // Get data from context
    const { user, loader, setLoader, handelSignUp, updateUserName , error , setError } = useContext(AuthContext);
    // const [error , setError] = useState('');
    const [handelError, setHandelError] = useState('')
    useEffect(()=>{
        if (error) {
            const errorCode = error?.split('/')[1]?.split('-')?.join(' ');
            setHandelError(errorCode);
        }
    },[error])
    // If user is already logged in then redirect to home page
    if (user) {
        return <Navigate to='/' replace />
    }

    // Handle the form submit
    const handelFormSubmit = e => {
        e.preventDefault();
        setError('');
        // Get the from data as a object
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const { name, email, password , photoURL } = data;

        // Call the handelSignUp function from context
        handelSignUp(email, password )
            .then(result => {
                updateUserName(name , photoURL )
                    .then(() => {
                        setLoader(false);
                    }, [])
                    .catch(err => {
                        console.log(err)
                    })
            }
            )
            .catch(err => {
                // Make this error message more user friendly
                setError(err.code);
                setLoader(false);
            });
    }
    return (
        loader ? <div className="h-screen flex justify-center items-center">

            <ScaleLoader
                color="#36d7b7"
                height={50}
            />
        </div> : <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="mt-12 flex flex-col items-center">
                        <div className="text-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign up
                            </h1>
                            <p className='text-gray-500 mt-2'>It will take less than 2 minutes</p>
                        </div>
                        <div className="w-full flex-1 mt-8">
                            <GoogleGithubLogin />

                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign up with e-mail
                                </div>
                            </div>
                            {/* Email Password Login  */}
                            <form onSubmit={handelFormSubmit} className="mx-auto max-w-xs">
                                <p className='text-center text-red-500 uppercase text-[13px] mb-3'>{handelError}</p>
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text"
                                    placeholder="Name"
                                    name='name'
                                />
                                <input
                                    className="w-full px-8 mt-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                />
                                <input
                                    className="w-full px-8 mt-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text"
                                    name='photoURL'
                                    placeholder="Photo URL"
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                />
                                <button
                                    type='submit'
                                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">
                                        Sign Up
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    Already as a member ?
                                    <Link
                                        to="/login"
                                        className="text-indigo-500 
                                  border-b

                                   border-dotted hover:text-indigo-700 font-semibold">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')` }}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;