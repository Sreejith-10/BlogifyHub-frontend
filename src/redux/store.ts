import newsReducer from "./newsSlice";
import authReducer from "./authslice";
import userReducer from "./userSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		news: newsReducer,
		auth: authReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
