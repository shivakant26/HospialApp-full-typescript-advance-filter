import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () =>{
    const navigate = useNavigate();
    const logout = () =>{
     let token : any =  localStorage.removeItem("token");
     if(!token){
        setTimeout(()=>{
            navigate("/");
        },1000)
     }
    }
    return (
        <>
        <h1>Dashboard</h1>
        <Button onClick={()=>logout()}>Logout</Button>
        </>
    )
}

export default Dashboard;