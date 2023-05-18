import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
// Create Context Object
export const AuthContext = createContext(null);


// create a provider for components to consume and subscribe to changes
const AuthProvider = ({ children }) => {
    // state are managed here
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    
    const auth = getAuth(app);

    const value = { user, loader, setLoader }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;