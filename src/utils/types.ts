export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type UserType = {
	name: string;
	email: string;
	password: string;
	id: string;
};

export type Post = {
	_id?: string;
	userId: string;
	postImage: string;
	postTitle: string;
	postTags: string[];
	postLikes: string[];
	postViews: string[];
	postDescription: string;
	postDate: string;
};

export type UserProfile = {
	fname: string;
	lname: string;
	profession: string;
	age: number;
	profileImg: File | null | undefined;
	userId: string | undefined;
	followers: string[];
};

export type ReplyType = {
	author: boolean;
	replierId: string;
	replierMessage: string;
	time: string;
	_id?: string;
};

export type CommentType = {
	author: boolean;
	postId: string;
	comment: {
		senderId: string;
		senderMessage: string;
		time: string;
		_id:string,
		replies: ReplyType[];
	}[];
};

export type SingleComment = {
	senderId: string;
	senderMessage: string;
	time: string;
	_id:string,
	replies: {
		author: boolean;
		replierId: string;
		replierMessage: string;
		time: string;
		_id?:string
	}[];
};

export type PostDataType = Post &{
	likedUsers: UserProfile[],
	postViewers:UserProfile[],
	userComment:SingleComment[]
};

export type FileType = {
		name:string,
		size:number,
		tyep:string
	}

export type CropType = {
	file: Blob & FileType;
	url: string;
};