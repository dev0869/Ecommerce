import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Config/Firebase";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const GoogleAuth = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    const LogOut=()=>{
        signOut(auth)
    }

    useEffect(() => {
        const Data = onAuthStateChanged(auth, (Loginuser) => {
            setUser(Loginuser)
            console.log(Loginuser)
        })
        return ()=>{
            Data()
        } 

    }, [])

    return (
        <AuthContext.Provider value={{ GoogleAuth ,LogOut,user }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => {
    return useContext(AuthContext)
}


export { AuthProvider, useAuthContext }