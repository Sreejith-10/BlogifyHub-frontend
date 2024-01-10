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
};

export type CommentType = {
	author: boolean,
	postId: string,
	senderId: string,
	senderMessage: string,
	time: string
	replies:
	{
		author: boolean,
		senderId: string,
		senderMessage: string,
		time: string
	}[],
}
