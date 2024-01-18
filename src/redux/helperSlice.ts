import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type HelperType = {
	edit: boolean;
	isEditing:boolean,
	cmtId : string
};

const INITIAL_STATE: HelperType = {
	edit: false,
	isEditing:false,
	cmtId:""
};

const helperSlice = createSlice({
	name: "helper",
	initialState: INITIAL_STATE,
	reducers: {
		setEditState: (state, action: PayloadAction<boolean>) => {
			state.edit = action.payload;
		},
		setId : (state,action : PayloadAction<string>) =>{
			state.cmtId = action.payload
		}
	},
});

export const {setEditState, setId} = helperSlice.actions;

export default helperSlice.reducer;
