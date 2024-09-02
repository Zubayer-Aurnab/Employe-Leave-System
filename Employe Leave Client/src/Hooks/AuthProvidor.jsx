import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import toast from "react-hot-toast";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(user)
    console.log(loading)
    const GoogleAuth = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }
    // create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const LogInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    //Update user
    const UpdateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // logOUT
    const logOutUser = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                toast.success("Log Out successful")
            })

    }



    // Auth State change
    useEffect(() => {
        onAuthStateChanged(auth, (storedUser) => {
            setUser(storedUser)
            setLoading(false);

        })
    }, [])



    const authInfo = {
        GoogleAuth,
        createUser,
        user,
        LogInUser,
        logOutUser,
        UpdateUser,
        loading,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;