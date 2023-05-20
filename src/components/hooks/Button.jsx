import React from 'react';
import { motion } from 'framer-motion';
const Button = ({children , bg , onClick , w}) => {
    return (
        <motion.button
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={`${bg ? bg : 'bg-primary'} ${w && 'w-1/2'} hover:text-white duration-500 px-5 w-full py-2 text-black rounded-lg font-bold`}
    >
        {children}
    </motion.button>
    );
};

export default Button;