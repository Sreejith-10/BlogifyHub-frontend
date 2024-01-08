import { createSlice } from "@reduxjs/toolkit"

type UserProfile = {
    fname: string,
    lname: string,
    profession: string,
    age: number,
    profileImg: File | null | undefined,
    userId: string | undefined
}

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