export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type UserType = {
	name: string;
	email: string;
	password: string;
	id: string;
};

export type Post = {
	_id?:string,
	userId: string;
	postImage: string;
	postTitle: string;
	postTags: string[];
	postDescription: string;
	postDate:string
};

export type UserProfile = {
	fname: string;
	lname: string;
	profession: string;
	age: number;
	profileImg: File | null | undefined;
	userId: string | undefined;
};
