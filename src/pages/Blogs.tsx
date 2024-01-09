import axios from "axios";
import {useEffect, useState} from "react";
import {useAppSelector} from "../hooks";
import Card from "../components/Card";

const Blogs = () => {
	const {user} = useAppSelector((state) => state.auth);
	const [userPost, setUserPost] = useState([]);
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
		console.log(id);
		// try {
		// 	await axios.delete(`/post/delete-post/${id}`);
		// } catch (err) {
		// 	console.log(err);
		// }
	};
	return (
		<div className="w-full h-full">
			<div className="w-full h-auto my-6">
				<h1 className="text-5xl font-bold">Blogs</h1>
			</div>
			<div className="w-full h-auto flex flex-wrap gap-6">
				{userPost.map((item, id) => (
					<Card edit={true} item={item} deletePost={deletePost} key={id} />
				))}
			</div>
		</div>
	);
};

export default Blogs;
