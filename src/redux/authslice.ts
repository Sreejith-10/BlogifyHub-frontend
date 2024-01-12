import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {UserType} from "../utils/types";

type IsLog = boolean;
type AccountType = boolean;

type InitialStateType = {
	isLogged: IsLog;
	user: UserType | null;
	accountComplete: AccountType;
};

const INITIAL_STATE: InitialStateType = {
	isLogged: false,
	user: null,
	accountComplete: false,
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
		setAccountComplete: (state, action: PayloadAction<AccountType>) => {
			state.accountComplete = action.payload;
		},
	},
});

export const {setAuth, setUser, setAccountComplete} = authSlice.actions;

export default authSlice.reducer;
