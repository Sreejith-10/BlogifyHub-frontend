import Comments from "../components/Comments";
import {colors} from "../constants/colors";
import {BsHandThumbsUp} from "react-icons/bs";
import {FaArrowLeft} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useAppSelector} from "../hooks";
import {fetchUser} from "../utils/fetch";
import {UserProfile} from "../utils/types";

const News = () => {
	const navigate = useNavigate();
	const {news} = useAppSelector((state) => state.news);
	const [user, setUser] = useState<UserProfile>();
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	useEffect(() => {
		try {
			fetchUser(news.userId)
				.then((res) => setUser(res))
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	}, [news]);
	return (
		<>
			<div className="w-full h-full mt-5 sm:m-0">
				<div className="w-full h-20 flex items-center justify-between gap-6 sm:flex-col">
					<div className=" z-50">
						<button
							onClick={() => navigate(-1)}
							className="sm:w-auto flex items-center justify-center gap-1 border border-[#0e4c94] text-[#0e4c94] px-2 py-1 rounded-md hover:bg-[#0e4c94] hover:text-white ease-in delay-150 duration-150 ">
							<FaArrowLeft /> Back
						</button>
					</div>
					<div className="flex w-auto h-auto gap-7 items-center">
						<img
							src={`http://localhost:3001/Images/${user?.profileImg}`}
							alt=""
							className="w-16 h-16 border-2 border-[#0e4c94] rounded-full"
						/>
						<div className=" flex flex-col items-center justify-center">
							<h1 className={`text-[${colors.primary}] font-bold text-xl`}>
								{user?.fname + " " + user?.lname}
							</h1>
							<p>{user?.profession}</p>
						</div>
					</div>
					<div className="h-auto w-auto flex items-center justify-center flex-row gap-7">
						<button
							style={{background: `${colors.primary}`}}
							className="text-white px-2 py-1 rounded-md">
							View profile
						</button>
						<BsHandThumbsUp size={30} />
					</div>
				</div>
				<div className="w-full h-[500px] sm:h-[300px] sm:mt-20">
					<img
						src={`http://localhost:3001/Images/${news.postImage}`}
						alt=""
						className="w-full h-full"
					/>
				</div>
				<div className="w-full my-7 text-4xl font-bold">
					<h1>{news.postTitle}</h1>
				</div>
				<div className="w-full h-auto my-5">
					{news?.postTags?.map((tag, id) => (
						<label
							key={id}
							className="w-auto h-auto px-4 py-2 rounded-md shadow-md text-slate-700 text-xl cursor-pointer bg-slate-200 hover:bg-white hover:shadow-slate-600 hover:shadow-sm hover:text-slate-500">
							{tag}
						</label>
					))}
				</div>
				<div className="w-full h-auto">
					<p className="font-thin text-lg">{news.postDescription}</p>
					di
				</div>
				<div className="w-full h-auto mt-20 sm:mt-10 flex flex-col items-center justify-center">
					<div className="w-full h-auto text-center mb-3 text-2xl">
						<h1>Add a Comment</h1>
					</div>
					<div className="w-1/2 sm:w-full h-auto relative">
						<textarea
							style={{
								border: `solid 2px ${colors.primary}`,
								borderRadius: "8px",
							}}
							className="w-full h-60 p-3 outline-none"
						/>
						<button
							style={{background: `${colors.primary}`}}
							className={`absolute bottom-5 right-3 text-white px-2 py-1 rounded-md`}>
							Comment
						</button>
					</div>
				</div>
				<div className="w-full h-auto mt-20 flex flex-col items-center justify-center">
					<div className="w-full mb-5">
						<h1 className="text-2xl">All comments(10)</h1>
					</div>
					<div className="w-full h-auto my-6 flex flex-col items-center justify-center gap-7">
						<Comments />
						<Comments />
					</div>
				</div>
			</div>
		</>
	);
};

export default News;
