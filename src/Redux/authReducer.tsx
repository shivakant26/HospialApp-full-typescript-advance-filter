import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

interface IData{
    status:string,
    getsinglepost:any,
    getdata:any,
    getallpost:any  
}

const initialState : IData={
    status:"",
    getsinglepost:[],
    getdata:[],
    getallpost:[]
}

export const getSignlePost = createAsyncThunk("auth/getSignlePost",async()=>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return response;
    }catch(error){
        return error;
    }
})

export const getAllData = createAsyncThunk("auth/getAllData",async()=>{
    try{
        const response = await axios.get('https://62458ed12cfed1881722c047.mockapi.io/post');
        return response;
    }catch(error){
        return error;
    }
})


export const getAllPost = createAsyncThunk("auth/getAllPost",async()=>{
    try{
        const response = await axios.get('https://dummyjson.com/posts');
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
        builder.addCase(getSignlePost.pending,(state,action)=>{
            state.status = "loading";
        }).addCase(getSignlePost.fulfilled,(state,{payload})=>{
            state.status = "succuss"
            state.getsinglepost = payload;
        }).addCase(getSignlePost.rejected,(state,action)=>{
            state.status = "failed";
        }).addCase(getAllData.pending,(state,action)=>{
            state.status = "loading";
        }).addCase(getAllData.fulfilled,(state,{payload})=>{
            state.status = "succuss"
            state.getallpost = "";
            state.getdata = payload;
        }).addCase(getAllData.rejected,(state,action)=>{
            state.status = "failed";
        }).addCase(getAllPost.pending,(state,action)=>{
            state.status = "loading";
        }).addCase(getAllPost.fulfilled,(state,{payload})=>{
            state.status = "succuss"
            state.getdata = ""
            state.getallpost = payload;
        }).addCase(getAllPost.rejected,(state,action)=>{
            state.status = "failed";
        })
    }
})

export default authSlice.reducer;