import newsReducer from "./newsSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {
        news : newsReducer
    }
})