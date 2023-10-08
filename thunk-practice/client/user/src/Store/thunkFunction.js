import { createAsyncThunk } from "@reduxjs/toolkit";

//Create your asynthunk function here
export const fetchreduxApiCalling = createAsyncThunk('fetchreduxApiCalling' , async ()=>{
    const response = await fetch('http://localhost:3004/data');
    return response.json();
})