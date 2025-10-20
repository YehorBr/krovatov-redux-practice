import { createSlice } from "@reduxjs/toolkit";
import { getAllFurnitures } from "./operations";


export const initialState = {
  furniture:[],
  isLoading: false,
  isError: false,
};

const furnitureSlice = createSlice({
    name: "furniture",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getAllFurnitures.pending, (state, action)=>{
            state.isLoading = true
        }),
        builder.addCase(getAllFurnitures.fulfilled, (state, action)=>{
            state.isLoading = false
            state.furniture = action.payload
        }),
        builder.addCase(getAllFurnitures.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
        })
    }

})

export const furnitureReducer = furnitureSlice.reducer