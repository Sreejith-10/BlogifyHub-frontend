import axios from "axios";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import Card from "../components/Card";
import {Post} from "../utils/types";
import {useNavigate} from "react-router";
import {setSinglePost} from "../redux/newsSlice";

const Blogs = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {user} = useAppSelector((state) => state.auth);
	const {singlePost} = useAppSelector((state) => state.news);
	const [userPost, setUserPost] = useState<Post[]>([]);
	useEffect(() => {
		const id = user?.id;
		try {
			axios
				.post(
					"/post/get-user-post",
					{id},
					{
						headers: {"Content-Type": "application/json"},
					}
				)
				.then((res) => setUserPost(res.data))
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	}, [user]);
	const deletePost = async (id: string | undefined) => {
		try {
			const {data} = await axios.delete(`/post/delete-post/${id}`);
			setUserPost((prev) => prev.filter((item) => item._id !== data._id));
		} catch (err) {
			console.log(err);
		}
	};
	const editPost = async (post: Post) => {
		dispatch(setSinglePost(post));
		navigate("/edit");
	};
	return (
		<>
			<div className="w-full h-full">
				<div className="w-full h-auto my-6">
					<h1 className="text-5xl font-bold">Blogs</h1>
				</div>
				<div className="w-full h-auto flex flex-wrap gap-6">
					{userPost.map((item, id) => (
						<Card
							edit={true}
							item={item}
							deletePost={deletePost}
							editPost={editPost}
							key={id}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Blogs;
