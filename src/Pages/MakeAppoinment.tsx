import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllPost } from '../Redux/authReducer';
import { AppDispatch } from '../Redux/store';

const MakeAppoinment = () =>{
    const dispatch = useDispatch<AppDispatch>();
    const getResponse = useSelector((state)=>state);
    console.log(123456,getResponse)

    useEffect(()=>{
        dispatch(getAllPost())
    },[])

    return(
        <>
        <h1>make An Appoinment page</h1>
        </>
    )
}

export default MakeAppoinment;