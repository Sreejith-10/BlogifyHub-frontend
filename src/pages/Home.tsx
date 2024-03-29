import {useEffect, useState} from "react";
import HeaderNav from "../components/HeaderNav";
import UserRoute from "../routes/UserRoute";
import axios from "axios";
import toast from "react-hot-toast";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setPosts} from "../redux/newsSlice";
import {BsPlus, BsX} from "react-icons/bs";
import {colors} from "../constants/colors";
import {useLocation, useNavigate} from "react-router";
import BottomNav from "../components/BottomNav";
import {useScrollDirection} from "../hooks/useScrollDirections";
import {easeIn, motion} from "framer-motion";
import {io} from "socket.io-client";

const Home = () => {
	const socket = io("https://blogifyhub-3tr0.onrender.com");
	const scrollDirection = useScrollDirection();
	const location = useLocation();
	const dispatch = useAppDispatch();
	const {singlePost} = useAppSelector((state) => state.news);
	const navigate = useNavigate();
	const [showSearch, setShowSearch] = useState<boolean>(false);
	const {accountComplete} = useAppSelector((state) => state.auth);
	const {isLogged} = useAppSelector((state) => state.auth);
	const {userProfile} = useAppSelector((state) => state.user);

	useEffect(() => {
		axios.get("/post/get-post").then(({data}) => {
			if (data.error) return toast.error(data.error);
			dispatch(setPosts(data));
		});
	}, [singlePost.postLikes]);

	useEffect(() => {
		if (userProfile?.userId) socket.emit("join_room", userProfile?.userId);
		socket.on("notify", (data) => {
			toast.success(data);
		});
		return () => {
			socket.emit("leave_room", userProfile?.userId);
		};
	}, [socket]);

	const route = () => {
		if (!isLogged) return navigate("/login");
		!accountComplete ? navigate("/account-setup") : navigate("/create");
	};

	const click = () => {
		route();
	};

	return (
		<>
			<div className="w-full h-full flex flex-col items-center sm:justify-between sm:absolute">
				<motion.div
					variants={{
						start: {
							y: -100,
							opacity: 0,
							transition: easeIn,
						},
						end: {
							y: 0,
							opacity: 1,
							transition: easeIn,
						},
					}}
					initial="end"
					animate={scrollDirection === "down" ? "start" : "end"}
					className={`w-full h-auto sm:fixed sticky z-50 ${
						scrollDirection === "down" ? "-top-full" : "top-0"
					} mb-2`}>
					<HeaderNav showSearch={showSearch} setShowSearch={setShowSearch} />
				</motion.div>
				<div className="w-[65%] sm:w-full sm:p-5 lg:w-[80%] xl:w-[90%] h-auto mx-auto relative sm:z-0 md:z-0 lg:z-0 sm:mt-10">
					<UserRoute />
				</div>
				<motion.div
					variants={{
						start: {
							y: 100,
							opacity: 0,
							scale: 0,
							transition: easeIn,
						},
						end: {
							y: 0,
							opacity: 1,
							scale: 1,
							transition: easeIn,
						},
					}}
					initial="end"
					animate={scrollDirection === "down" ? "start" : "end"}
					className={`w-full h-auto ${
						scrollDirection === "down" ? "-bottom-full" : "bottom-0"
					} hidden sm:sticky space-y-3 sm:flex flex-col items-end justify-center`}>
					<div
						className={`w-fit h-auto hidden sm:block md:block lg:block  rounded-full z-50 absolute bottom-24 right-4 ${
							location.pathname === "/account" && "sm:hidden"
						}`}>
						<div className={`w-fit rounded-full bg-[${colors.primary}]  `}>
							{location.pathname === "/create" ? (
								<BsX size={55} fill={"white"} onClick={() => navigate(-1)} />
							) : (
								<BsPlus size={55} fill={"white"} onClick={click} />
							)}
						</div>
					</div>
					<div
						className={`w-full h-auto hidden sm:block bg-[${colors.primary}] z-50`}>
						<BottomNav showSearch={showSearch} setShowSearch={setShowSearch} />
					</div>
				</motion.div>
				<div
					className={`w-fit h-auto hidden md:block lg:block  rounded-full z-50 fixed bottom-5 right-5 sm:hidden`}
					onClick={() => navigate("/create")}>
					<div className={`w-fit rounded-full bg-[${colors.primary}]  `}>
						<BsPlus size={55} fill={"white"} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
