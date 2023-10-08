//You need to create the slice here

import { createSlice } from "@reduxjs/toolkit";
import { fetchreduxApiCalling } from "./thunkFunction";

const slice = createSlice({
    name:"reduxApiCalling",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchreduxApiCalling.pending, (state , action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchreduxApiCalling.fulfilled, (state , action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchreduxApiCalling.rejected, (state , action)=>{
            console.log("Error", action.payload);
            state.isError = true;
        });
    }
})

export default slice.reducer;