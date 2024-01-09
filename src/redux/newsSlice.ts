import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {Post} from "../utils/types";

type PostsType = Post[];

type InitialStateType = {
	tag: string;
	posts: PostsType;
	news: Post;
};

const INITIAL_STATE: InitialStateType = {
	tag: "Trending",
	posts: [
		{
			postDescription: "",
			postImage: "",
			postTags: [""],
			postTitle: "",
			userId: "",
			postDate: "",
		},
	],
	news: {
		postDescription: "",
		postImage: "",
		postTags: [""],
		postTitle: "",
		userId: "",
		postDate: "",
	},
};

export const newsSlice = createSlice({
	name: "news",
	initialState: INITIAL_STATE,
	reducers: {
		setTag: (state, action: PayloadAction<string>) => {
			state.tag = action.payload;
		},
		setPosts: (state, action: PayloadAction<PostsType>) => {
			state.posts = action.payload;
		},
		setSingleNews: (state, action: PayloadAction<Post>) => {
			state.news = action.payload;
		},
	},
});

export const {setTag, setPosts,setSingleNews} = newsSlice.actions;

export default newsSlice.reducer;
