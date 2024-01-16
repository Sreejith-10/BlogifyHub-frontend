import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type HelperType = {
	edit: boolean;
};

const INITIAL_STATE: HelperType = {
	edit: false,
};

const helperSlice = createSlice({
	name: "helper",
	initialState: INITIAL_STATE,
	reducers: {
		setEditState: (state, action: PayloadAction<boolean>) => {
			state.edit = action.payload;
		},
	},
});

export const {setEditState} = helperSlice.actions;

export default helperSlice.reducer;
