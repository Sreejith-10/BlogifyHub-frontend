import newsReducer from "./newsSlice"
import authReducer from "./authslice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {
        news : newsReducer,
        auth : authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch