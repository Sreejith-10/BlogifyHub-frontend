import axios from "axios";
import {BsX} from "react-icons/bs";
import {useAppSelector} from "../hooks";
import {useEffect, useState} from "react";
import {SetState, UserProfile} from "../utils/types";
import UserInfo from "./UserInfo";
import {motion} from "framer-motion";

type followersType = UserProfile & {
	followersData: UserProfile[];
};

const FollwersList = ({
	follower,
	showFollowers,
}: {
	follower: boolean;
	showFollowers: SetState<boolean>;
}) => {
	const {userProfile} = useAppSelector((state) => state.user);
	const [followers, setFollowers] = useState<followersType>();
	useEffect(() => {
		try {
			const id = userProfile?.userId;
			axios
				.get("/user/get-followers/" + id)
				.then(({data}) => setFollowers(data[0]))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<>
			<motion.div
				variants={{
					hidden: {
						scale: 0,
						opacity: 0,
					},
					animate: {
						scale: 1,
						opacity: 1,
					},
				}}
				initial="hidden"
				animate={follower ? "animate" : "hidden"}
				transition={{ease: "easeInOut"}}
				className="w-full h-auto sm:bg-none bg-slate-100 border border-slate-300 p-5 mt-5 rounded-md flex flex-col gap-5 items-center justify-center">
				<div className="w-full h-auto flex items-center justify-between ">
					<h1 className="font-semibold text-xl">Followers</h1>
					<BsX size={40} onClick={() => showFollowers(false)} />
				</div>
				<div className="w-full h-auto">
					{followers?.followersData.map((item, id) => (
						<UserInfo item={item} key={id} />
					))}
				</div>
			</motion.div>
		</>
	);
};

export default FollwersList;
