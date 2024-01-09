import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { Post } from "../utils/types";

type PostsType = Post[];

type InitialStateType = {
	tag: string;
	posts: PostsType;
};

const INITIAL_STATE: InitialStateType = {
	tag: "Trending",
	posts:[ {
		postDescription: "",
		postImage: "",
		postTags: [""],
		postTitle: "",
		userId: "",
	}],
};

export const newsSlice = createSlice({
	name: "news",
	initialState: INITIAL_STATE,
	reducers: {
		setTag: (state, action: PayloadAction<string>) => {
			state.tag = action.payload;
		},
        setPosts:(state,action : PayloadAction<PostsType>) =>{
            state.posts = action.payload
        }
	},
});

export const {setTag,setPosts} = newsSlice.actions;

export default newsSlice.reducer;
