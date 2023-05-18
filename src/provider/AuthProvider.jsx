import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
// Create Context Object
export const AuthContext = createContext(null);


// create a provider for components to consume and subscribe to changes
const AuthProvider = ({ children }) => {
    // state are managed here
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const auth = getAuth(app);

    const handelSignUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth ,  email, password);
    };
    const updateUserName = (name) => {
       updateProfile(auth.currentUser, { displayName: name })
    };
    const handelLogout = () => {
        return signOut(auth);
    };
    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => unsubscribed();
    }, [])


    const value = { user, loader, setLoader, handelSignUp, updateUserName , handelLogout , login}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;