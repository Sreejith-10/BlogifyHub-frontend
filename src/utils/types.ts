export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export type UserType = {
    name:string,
    email:string,
    password:string,
    id:string
}

export type Post = {
	userId: string;
	postImage: string;
	postTitle: string;
	postTags: string[];
	postDescription: string;
}