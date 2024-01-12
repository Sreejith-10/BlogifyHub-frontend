import axios from "axios";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setAutherData} from "../redux/userSlice";
import {UserProfile} from "../utils/types";
import {useEffect} from "react";
import toast from "react-hot-toast";

const FollowButton = ({author}: {author: UserProfile | null}) => {
	const dispatch = useAppDispatch();
	const {userProfile} = useAppSelector((state) => state.user);

	const followUser = async () => {
		await axios
			.post(
				"/user/follow-user",
				{
					authorId: author?.userId,
					userId: userProfile?.userId,
				},
				{headers: {"Content-Type": "application/json"}}
			)
			.then(() => {
				setbtn();
				toast.success(`Started following ${author?.fname}`);
			});
	};
	const unFollowUser = async () => {
		await axios
			.post(
				"/user/unfollow-user",
				{
					authorId: author?.userId,
					userId: userProfile?.userId,
				},
				{headers: {"Content-Type": "application/json"}}
			)
			.then(() => {
				setbtn();
				toast.success("unfollowed");
			});
	};
	const setbtn = () => {
		try {
			const id = author?.userId;
			axios
				.get(`/user/get-user/${id}`)
				.then(({data}) => dispatch(setAutherData(data)))
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		setbtn();
	}, [author]);

	const button =
		userProfile?.userId && author?.followers.includes(userProfile?.userId);
	return (
		<>
			{button ? (
				<button
					onClick={unFollowUser}
					className="bg-pink-600 py-1 px-3 text-white rounded-md text-lg">
					Unfollow
				</button>
			) : (
				<button
					onClick={followUser}
					className="bg-pink-600 py-1 px-3 text-white rounded-md text-lg">
					Follow
				</button>
			)}
		</>
	);
};

export default FollowButton;
