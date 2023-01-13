import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

interface IData{
    status:string,
    getpost:any,  
}

const initialState : IData={
    status:"",
    getpost:[],
}

export const getAllPost = createAsyncThunk("auth/getAllPost",async()=>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return response;
    }catch(error){
        return error;
    }
})

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllPost.pending,(state,action)=>{
            state.status = "loading";
        }).addCase(getAllPost.fulfilled,(state,{payload})=>{
            state.status = "succuss"
            state.getpost = payload;
        }).addCase(getAllPost.rejected,(state,action)=>{
            state.status = "failed";
        })
    }
})

export default authSlice.reducer;