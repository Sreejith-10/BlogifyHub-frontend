import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type HelperType = {
	edit: boolean;
	isEditing:boolean,
	search:boolean,
	cmtId : string
};

const INITIAL_STATE: HelperType = {
	edit: false,
	isEditing:false,
	search:false,
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
		},
		showSearch: (state, action: PayloadAction<boolean>) => {
			console.log(action.payload);
			state.edit = action.payload;
		},
	},
});

export const {setEditState, setId, showSearch} = helperSlice.actions;

export default helperSlice.reducer;
