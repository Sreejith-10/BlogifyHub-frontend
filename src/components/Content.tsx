import {useEffect} from "react";
import {useAppSelector} from "../hooks";
import Hero from "./Hero";
import NewsSection from "./NewsSection";
import TrendingNav from "./TrendingNav";
import {io} from "socket.io-client";
import toast from "react-hot-toast";

const socket = io("http://localhost:3001");

const Content = () => {
	const {userProfile} = useAppSelector((state) => state.user);

	useEffect(() => {
		if (userProfile?.userId) socket.emit("join_room", userProfile?.userId);
		socket.on("notify", (data) => {
			toast.success(data);
		});
		return () => {
			socket.emit("leave_room", userProfile?.userId);
		};
	}, [socket]);
	return (
		<>
			<div className="w-full h-full">
				<Hero />
				<TrendingNav />
				<NewsSection />
			</div>
		</>
	);
};

export default Content;
