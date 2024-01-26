import {Route, Routes, useLocation, useNavigate} from "react-router";
import Tile from "../components/Tile";
import {FaArrowLeft, FaRegEye, FaRegHeart} from "react-icons/fa";
import {BiSolidBarChartAlt2} from "react-icons/bi";
import {ReactNode, useEffect, useState} from "react";
import axios from "axios";
import General from "../components/General";
import LikeList from "../components/LikeList";
import ViewList from "../components/ViewList";
import {useAppSelector} from "../hooks";
import {PostDataType} from "../utils/types";
import {getTime} from "../utils/time";

const Statistics = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [postData, setPostData] = useState<PostDataType>();
	const {userProfile} = useAppSelector((state) => state.user);
	const icons = [
		<BiSolidBarChartAlt2
			onClick={() => navigate("/statistics/")}
			fill={"#0e4c94"}
			className="w-[15%] h-[15%] md:w-[30%] md:h-[30%] sm:w-[40%] sm:h-[40%] cursor-pointer"
		/>,
		<FaRegHeart
			onClick={() => navigate("/statistics/users-liked")}
			fill={"#0e4c94"}
			className="w-[15%] h-[15%] md:w-[30%] md:h-[30%] sm:w-[40%] sm:h-[40%] cursor-pointer"
		/>,
		<FaRegEye
			onClick={() => navigate("/statistics/users-views")}
			fill={"#0e4c94"}
			className="w-[15%] h-[15%] md:w-[30%] md:h-[30%] sm:w-[40%] sm:h-[40%] cursor-pointer"
		/>,
	];

	useEffect(() => {
		try {
			const {postId, postTitle} = location.state;
			axios
				.post(
					"/post/get-post-byId",
					{postId, postTitle},
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				)
				.then(({data}) => setPostData(data[0]))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<>
			<div className="w-full h-full sm:mt-10">
				<div className="w-full h-auto my-6 flex items-center gap-5">
					<button
						onClick={() => navigate("/blogs")}
						className="sm:w-auto flex items-center justify-center gap-1 border border-[#0e4c94] text-[#0e4c94] px-2 py-1 rounded-md hover:bg-[#0e4c94] hover:text-white ease-in delay-150 duration-150 ">
						<FaArrowLeft /> Back
					</button>
					<h1 className="text-5xl font-bold sm:text-lg md:text-2xl">
						Blog Activity
					</h1>
				</div>
				<div className="w-full h-auto flex flex-col gap-5">
					<div className="w-full h-auto flex flex-col gap-5 bg-slate-50 border border-slate-500 border-opacity-35 p-5 rounded-xl">
						<div className="w-full h-[10%] flex items-center sm:gap-5">
							<div className="w-[10%] lg:w-[20%] sm:w-[30%] h-full items-center justify-center">
								<img
									src={`http://localhost:3001/Images/${userProfile?.profileImg}`}
									alt=""
									className="rounded-full w-20 h-20 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
								/>
							</div>
							<div className="h-full flex items-center gap-5">
								<h1 className="sm:w-full font-bold text-xl sm:text-lg">
									{userProfile?.fname + " " + userProfile?.lname}
								</h1>
								<p className="sm:text-sm">{getTime(postData?.postDate)}</p>
							</div>
						</div>
						<div className="w-full h-auto flex gap-5">
							<div className="w-[25%] lg:w-[30%]">
								<img
									src={`http://localhost:3001/Images/${postData?.postImage}`}
									alt=""
									className="rounded-xl"
								/>
							</div>
							<div className="w-9/12 lg:w-[70%]">
								<h1 className="font-bold text-xl sm:text-base">
									{postData?.postTitle}
								</h1>
								<p className="font-medium text-lg line-clamp-6 sm:line-clamp-4 sm:text-sm">
									{postData?.postDescription}
								</p>
							</div>
						</div>
						<div className="w-full h-auto">
							{postData?.postTags?.map((item, id) => (
								<Tile trend={item} key={id} />
							))}
						</div>
					</div>
					<div className="w-full h-auto flex items-center justify-center gap-5 bg-slate-50 border border-slate-500 border-opacity-35 p-5 rounded-xl">
						{icons.map((item) => {
							return (
								<div className="w-[20%] h-full flex flex-col items-center justify-center gap-3">
									{item}
								</div>
							);
						})}
					</div>
					<div className="w-full h-auto bg-slate-50 border border-slate-500 border-opacity-35 py-5 px-14 sm:px-5 md:px-8 lg:px-10 rounded-xl mb-5">
						<Routes>
							<Route index element={<General postData={postData} />} />
							<Route
								path="/users-liked"
								element={<LikeList postData={postData} />}
							/>
							<Route
								path="/users-views"
								element={<ViewList postData={postData} />}
							/>
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
};

export default Statistics;
