import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
    tag:string
}

const INITIAL_STATE:InitialStateType = {
    tag : ""
}

export const newsSlice = createSlice({
    name:"news",
    initialState:INITIAL_STATE,
    reducers:{
        setTag: (state,action) =>{
            state.tag = action.payload
        }
    }
})

export const {setTag} = newsSlice.actions;

export default newsSlice.reducer