import {UserProfile} from "../utils/types";
import {useAppSelector} from "../hooks";

const UserInfo = ({item}: {item: UserProfile}) => {
	const {userProfile} = useAppSelector((state) => state.user);

	const isFollowing = item.followers.some(
		(item) => item === userProfile?.userId
	);
	return (
		<li className="w-full h-28 bg-slate-50 p-5 flex items-center justify-between gap-5 rounded-xl border border-slate-500 border-opacity-50">
			<div className="w-auto h-full flex items-center justify-center gap-5">
				<img
					src={`http://localhost:3001/Images/${item.profileImg}`}
					alt=""
					className="w-16 h-16 rounded-full"
				/>
				<p className="text-xl font-semibold">
					{item?.fname + " " + item?.lname}
				</p>
			</div>
			{isFollowing ? (
				<button className="bg-pink-600 text-white py-1 px-2 rounded-md">
					Unfollow
				</button>
			) : (
				<button className="bg-white border border-pink-600 text-pink-600 py-1 px-2 rounded-md">
					Follow
				</button>
			)}
		</li>
	);
};

export default UserInfo;
