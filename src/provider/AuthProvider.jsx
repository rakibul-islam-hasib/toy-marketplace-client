import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
// Create Context Object
export const AuthContext = createContext(null);


// create a provider for components to consume and subscribe to changes
const AuthProvider = ({ children }) => {
    // state are managed here
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null)
    const auth = getAuth(app);
    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();
    const handelSignUp = async (email, password) => {
        setLoader(true);
        try {
            return createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setLoader(false);
            throw error;
        }
    };
    const updateUserName = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    };
    const login = async (email, password) => {
        setLoader(true);
        try {
            return signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setLoader(false);
            console.log(error.code, 'this is error code under login')
            setError(error.code);
            throw error;
        }
    };
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, google)
    }
    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, github)
    }
    const handelLogout = () => {
        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => unsubscribed();
    }, [])


    const value = { user, loader, setLoader, handelSignUp, updateUserName, handelLogout, login, googleLogin, githubLogin, error, setError }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;