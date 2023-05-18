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

    const auth = getAuth(app);
    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();
    const handelSignUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUserName = (name, photo) => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    };
    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
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


    const value = { user, loader, setLoader, handelSignUp, updateUserName, handelLogout, login , googleLogin , githubLogin}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;