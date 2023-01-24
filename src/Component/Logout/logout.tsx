import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () =>{
    const navigate = useNavigate();
    const logout = () =>{
     let token : any =  localStorage.removeItem("token");
     if(!token){
        setTimeout(()=>{
            navigate("/");
        },1000)
     }
    }
    logout();
    return(
        <></>
    )
}

export default Logout;