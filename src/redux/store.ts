import newsReducer from "./newsSlice";
import authReducer from "./authslice";
import userReducer from "./userSlice";
import helperReducer from "./helperSlice";
import cropReducer from "./cropSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		news: newsReducer,
		auth: authReducer,
		user: userReducer,
		helper:helperReducer,
		crop : cropReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
