import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../hooks/Button';

const navLinks = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Toys',
      route: '/toys'
    },
    {
      name: 'New Arrivals',
      route: '/new-arrivals'
    },
    {
      name: 'Sale',
      route: '/sale'
    },
    {
      name: 'Contact Us',
      route: '/contact'
    }
  ];
  
const NavBar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.nav
            className="bg-secondary w-full z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="lg:w-[95%] mx-auto  sm:px-6 lg:px-6">
                <div className="flex px-4  items-center  justify-between h-[70px]">
                    {/* Logo */}
                    <div className="flex-shrink-0 pl-7 md:p-0  flex items-center">
                        <h1 className='text-2xl font-bold'>Zooming Wheels</h1>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <FaBars className="h-6 text-black w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden text-black md:block">
                        <div className="ml-10 flex items-center  space-x-4">
                            {navLinks.map((link) => (
                                <NavLink className='font-bold hover:text-white duration-300' to={link.route} key={link.route} style={{ whiteSpace: 'nowrap' }}>
                                    {link.name}
                                </NavLink>
                            ))}
                            <Button>
                                Login
                            </Button>
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
