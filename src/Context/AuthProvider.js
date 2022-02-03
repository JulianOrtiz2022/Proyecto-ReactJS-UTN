import React, {useState} from "react";
import AuthContext from "./AuthContext";

function AuthProvider(props){
    const [userLogin, setUserLogin]= 
    useState(localStorage.getItem("login")|| false)

    const loginUser = ()=>{
        setUserLogin(true)
        localStorage.setItem("login",true)
    }
    const logoutUser = ()=>{
        setUserLogin(false)
        localStorage.removeItem("login")
    }
    return(
        <AuthContext.Provider
            value={{
                userLogin,
                loginUser,
                logoutUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
        
    )
}
export default AuthProvider