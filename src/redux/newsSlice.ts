import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {CommentType, Post} from "../utils/types";

type PostsType = Post[];

type InitialStateType = {
	tag: string;
	posts: PostsType;
	news: Post;
	singlePost: Post;
	comments: CommentType;
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
	comments: {
		author: false,
		postId: "",
		comment: [
			{
				senderId: "",
				senderMessage: "",
				time: "",
				_id:"",
				replies: [
					{
						author: false,
						replierId: "",
						replierMessage: "",
						time: "",
						_id:""
					}
				],
			},
		],
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
		setComment: (state, action: PayloadAction<CommentType>) => {
			state.comments = action.payload;
		},
	},
});

export const {setTag, setPosts, setSingleNews, setSinglePost, setComment} =
	newsSlice.actions;

export default newsSlice.reducer;
