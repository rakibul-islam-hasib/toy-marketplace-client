import React from 'react';
import footerImg from '../../assets/footer.webp';
import { Link } from 'react-router-dom';
import ytLogo from '../../assets/ytLogo.svg'
const Footer = () => {
    return (
        <footer >
            <div className="px-3 pt-6 lg:px-9 border-t-2 bg-gray-50">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                <div className="sm:col-span-2">
                    <Link to={'/'} className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">Zooming Wheels</span>
                    </Link>
                    <div className="mt-6 lg:max-w-xl">
                        <p className="text-sm text-gray-800">
                            Zooming Wheels is your ultimate destination for all things toys! We bring you a wide selection of thrilling and captivating toys that will ignite the imagination and excitement in children of all ages. From remote control cars and action figures to puzzles and building blocks, we have Link fantastic range of toys to suit every interest and play style.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col gap-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">Popular Toy Cars</p>
                    <Link to={'/'}>Remote Control Cars</Link>
                    <Link to={'/'}>Diecast Cars</Link>
                    <Link to={'/'}>Construction Vehicles</Link>
                    <p className="text-base font-bold tracking-wide text-gray-900">Top Categories</p>
                    <Link to={'/'}>Race Tracks</Link>
                    <Link to={'/'}>Toy Car Sets</Link>
                    <Link to={'/'}>Pull-Back Cars</Link>
                </div>

                <div>
                    <p className="text-base font-bold tracking-wide text-gray-900">WE ARE ALSO AVAILABLE ON</p>
                    <div className="flex items-center gap-1 px-2">
                        <Link to={'/'} className="w-full min-w-xl">
                            <img src="https://i.ibb.co/pKsQj6n/5a902dbf7f96951c82922875.png" alt="Playstore Button"
                                className="h-14" />
                        </Link>
                        <Link className="w-full min-w-xl" >
                            <img src={ytLogo} alt="Youtube Button"
                                className="h-20" />
                        </Link>
                    </div>
                    <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <Link to={'/'} title="send email">admin@rakibul.tech</Link>
                    </div>
                </div>

            </div>

            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">© Copyright 2023 Zooming Wheels . All rights reserved.</p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <Link to={'/'}
                            className="text-sm text-gray-600 ">Privacy
                            &amp; Cookies Policy
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}
                            className="text-sm text-gray-600">Disclaimer
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
            <img src={footerImg} className='w-full' alt="" />
        </footer>
    );
};

export default Footer;