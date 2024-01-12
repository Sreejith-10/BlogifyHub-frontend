import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {UserProfile} from "../utils/types";

type UserSliceType = {
	userProfile: UserProfile | null;
	author: UserProfile | null;
};

const INITIAL_STATE: UserSliceType = {
	userProfile: null,
	author: null,
};

const userSlice = createSlice({
	name: "user",
	initialState: INITIAL_STATE,
	reducers: {
		setUserProfile: (state, action: PayloadAction<UserProfile>) => {
			state.userProfile = action.payload;
		},
		setAutherData: (state, action: PayloadAction<UserProfile>) => {
			state.author = action.payload;
		},
	},
});

export const {setUserProfile, setAutherData} =
	userSlice.actions;
export default userSlice.reducer;
