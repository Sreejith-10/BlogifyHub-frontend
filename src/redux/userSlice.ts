import { createSlice } from "@reduxjs/toolkit"
import { UserProfile } from "../utils/types"


type UserSliceType = {
    userProfile : UserProfile | null
}

const INITIAL_STATE:UserSliceType = {
    userProfile : null,
}

const userSlice = createSlice({
    name:"user",
    initialState:INITIAL_STATE,
    reducers:{
        setUserProfile : (state,action) =>{
            state.userProfile = action.payload
        }
    }
})

export const {setUserProfile} = userSlice.actions;
export default userSlice.reducer