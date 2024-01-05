import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    isLogged : false
}

const authSlice = createSlice({
    name:"auth",initialState:INITIAL_STATE,reducers:{
        setAuth : (state,action) =>{
            state.isLogged = action.payload
        }
    }
})

export const {setAuth} = authSlice.actions

export default authSlice.reducer