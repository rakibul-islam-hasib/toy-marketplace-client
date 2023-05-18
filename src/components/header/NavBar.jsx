import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Button from '../hooks/Button';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Tooltip from '@mui/material/Tooltip';

const navLinks = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'All Toys',
        route: '/toys'
    }
];

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, handelLogout } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setIsLogin(location.pathname === '/login');
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    // console.log(user)
    const logOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log Out'
        }).then((result) => {
            if (result.isConfirmed) {
                handelLogout()
                    .then(() => {
                        navigate('/');
                        Swal.fire(
                            'Success..!',
                            'You are logged out.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        });
    };

    return (
        <motion.nav
            className="bg-black text-white w-full z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
                <div className="flex px-4 items-center justify-between py-5">
                    {/* Logo */}
                    <div className="flex-shrink-0 pl-7 md:p-0 flex items-center">
                        <h1 onClick={() => navigate('/')} className='text-2xl cursor-pointer font-bold'>Zooming Wheels</h1>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <FaBars className="h-6 text-white hover:text-primary w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden  text-black md:block">
                        <div className="flex">
                            <ul className="ml-10 flex items-center space-x-4 pr-4">
                                {navLinks.map((link) => (
                                    <li key={link.route}>
                                        <NavLink
                                            className='font-bold text-white hover:text-primary duration-300'
                                            to={link.route}
                                            
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                                {
                                    user && <li><NavLink to='my-toys' className='text-white hover:text-primary'>My Toys</NavLink></li>
                                }
                                {
                                    user && <li><NavLink to='add-toy' className='text-white hover:text-primary'>Add Toy</NavLink></li>
                                }
                            </ul>

                            <div className="flex">
                                {/* Display User Image */}
                                {user && (
                                    <Tooltip title={user.displayName}>

                                        <div className="h-11 w-16 cursor-pointer mr-3 rounded-full">
                                            <img src={user.photoURL} alt="" className="h-full w-full rounded-full" />
                                        </div>
                                    </Tooltip>
                                )}
                                {user ? (
                                    <Button onClick={logOut}>Logout</Button>
                                ) : isLogin ? (
                                    <Button onClick={() => navigate('/register')}>Register</Button>
                                ) : (
                                    <Button onClick={() => navigate('/login')}>Login</Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden mt-2 w-full bg-black"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a
                                href="/"
                                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                About
                            </a>
                            {/* Add more mobile menu links as needed */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default NavBar;
