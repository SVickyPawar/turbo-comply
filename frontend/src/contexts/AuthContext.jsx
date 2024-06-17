import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);
         
    
    return <AuthContext.Provider value={{handleLogin,isLoggedIn}}>{children}</AuthContext.Provider>
}