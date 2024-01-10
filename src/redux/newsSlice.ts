import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {Post} from "../utils/types";

type PostsType = Post[];

type InitialStateType = {
	tag: string;
	posts: PostsType;
	news: Post;
	singlePost: Post;
};

const INITIAL_STATE: InitialStateType = {
	tag: "Trending",
	posts: [
		{
			postDescription: "",
			postImage: "",
			postTags: [""],
			postLikes: [""],
			postTitle: "",
			userId: "",
			postDate: "",
		},
	],
	news: {
		postDescription: "",
		postImage: "",
		postTags: [""],
		postLikes: [""],
		postTitle: "",
		userId: "",
		postDate: "",
	},
	singlePost: {
		postDescription: "",
		postImage: "",
		postTags: [""],
		postLikes: [""],
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
		setSinglePost: (state, action: PayloadAction<Post>) => {
			state.singlePost = action.payload;
		},
	},
});

export const {setTag, setPosts, setSingleNews, setSinglePost} =
	newsSlice.actions;

export default newsSlice.reducer;
