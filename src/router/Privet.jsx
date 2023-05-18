import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privet = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location.pathname }} replace />
};

export default Privet;