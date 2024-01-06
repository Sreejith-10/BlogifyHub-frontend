import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {UserType} from "../utils/types";

type IsLog = boolean;

type InitialStateType = {
	isLogged: IsLog;
	user: UserType | null;
};

const INITIAL_STATE: InitialStateType = {
	isLogged: false,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: INITIAL_STATE,
	reducers: {
		setAuth: (state, action: PayloadAction<IsLog>) => {
			state.isLogged = action.payload;
		},
		setUser: (state, action: PayloadAction<UserType | null>) => {
			state.user = action.payload;
		},
	},
});

export const {setAuth, setUser} = authSlice.actions;

export default authSlice.reducer;
