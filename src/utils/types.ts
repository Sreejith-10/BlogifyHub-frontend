export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type UserType = {
	name: string;
	email: string;
	password: string;
	id: string;
};

export type Post = {
	_id?: string,
	userId: string;
	postImage: string;
	postTitle: string;
	postTags: string[];
	postLikes: string[];
	postDescription: string;
	postDate: string
};

export type UserProfile = {
	fname: string;
	lname: string;
	profession: string;
	age: number;
	profileImg: File | null | undefined;
	userId: string | undefined;
	followers:string[]
};

export type ReplyType =
	{
		author: boolean;
		replierId: string;
		replierMessage: string;
		time: string;
		_id?:string
	};


export type CommentType = {
	author: boolean,
	postId: string,
	senderId: string,
	senderMessage: string,
	time: string
	_id:string
	replies:ReplyType[],
}

