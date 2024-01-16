import Comments from "../components/Comments";
import {colors} from "../constants/colors";
import {BsFillHandThumbsUpFill, BsHandThumbsUp} from "react-icons/bs";
import {FaArrowLeft} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "../hooks";
import {UserProfile} from "../utils/types";
import axios from "axios";
import toast from "react-hot-toast";
import {setComment, setSingleNews} from "../redux/newsSlice";
import "../App.css";
import {setAutherData} from "../redux/userSlice";
import {io} from "socket.io-client";

const socket = io("http://localhost:3001");

const News = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {news} = useAppSelector((state) => state.news);
	const {comments} = useAppSelector((state) => state.news);
	const {user} = useAppSelector((state) => state.auth);
	const [userUnique, setUserUnique] = useState<UserProfile>();
	const [message, setMessage] = useState("");
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	useEffect(() => {
		try {
			const id = news.userId;
			axios
				.get(`/user/get-user/${id}`)
				.then(({data}) => setUserUnique(data))
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	}, [news]);
	useEffect(() => {
		try {
			axios
				.get(`/comment/get-all-comment/${news._id}`)
				.then(({data}) => dispatch(setComment(data)))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);
	const clickHandler = async (k: string) => {
		try {
			const userId = user?.id;
			const postId = news._id;
			const authorId = userUnique?.userId;
			const {data} = await axios.post(
				`/post/${k === "like" ? "like-post" : "dislike-post"}`,
				{userId, postId},
				{headers: {"Content-Type": "application/json"}}
			);
			if (k === "like") {
				socket.emit("join_room", authorId);
				socket.emit("like_post", authorId);
			}

			socket.emit("leave_room", authorId);
			if (data.error) {
				return toast.error(data.error);
			} else {
				return dispatch(setSingleNews(data));
			}
		} catch (err) {
			console.log(err);
		}
	};

	const submitComment = async () => {
		try {
			if (!message) return toast.error("Comment cannot be empty");
			const userId = user?.id;
			const postId = news._id;
			const {data} = await axios.post("/comment/add-comment", {
				userId,
				postId,
				message,
			});
			dispatch(setComment(data));
		} catch (err) {
			console.log(err);
		}
	};
	const profileHandler = () => {
		if (userUnique) {
			dispatch(setAutherData(userUnique));
			navigate("/author");
		}
	};
	return (
		<>
			<div className="w-full h-full mt-5 sm:m-0">
				<div className="w-full h-20 flex items-center justify-between gap-6 sm:flex-col">
					<div className="sm:w-full sm:h-auto z-50">
						<button
							onClick={() => navigate(-1)}
							className="sm:w-auto flex items-center justify-center gap-1 border border-[#0e4c94] text-[#0e4c94] px-2 py-1 rounded-md hover:bg-[#0e4c94] hover:text-white ease-in delay-150 duration-150 ">
							<FaArrowLeft /> Back
						</button>
					</div>
					<div className="w-full flex items-center justify-between">
						<div className="sm:w-1/2 sm:h-auto flex w-auto h-auto gap-7 items-center">
							<img
								src={`http://localhost:3001/Images/${userUnique?.profileImg}`}
								alt=""
								className="w-16 h-16 border-2 border-[#0e4c94] rounded-full"
							/>
							<div className=" flex flex-col items-center justify-center">
								<h1 className={`text-[${colors.primary}] font-bold text-xl`}>
									{userUnique?.fname + " " + userUnique?.lname}
								</h1>
								<p>{userUnique?.profession}</p>
							</div>
						</div>
						<div className="h-auto w-auto flex items-end justify-end flex-row gap-7">
							<button onClick={profileHandler} className="button">
								View profile
							</button>
							{news.postLikes.length === 0 ? (
								<span onClick={() => clickHandler("like")}>
									<BsHandThumbsUp size={30} className="cursor-pointer" />
								</span>
							) : (
								news.postLikes.map((item) =>
									item !== user?.id ? (
										<span onClick={() => clickHandler("like")}>
											<BsHandThumbsUp size={30} className="cursor-pointer" />
										</span>
									) : (
										<BsFillHandThumbsUpFill
											onClick={() => clickHandler("dislike")}
											size={30}
											className={`cursor-pointer fill-[${colors.primary}]`}
										/>
									)
								)
							)}
						</div>
					</div>
				</div>
				<div className="w-full h-[600px] sm:h-[300px] sm:mt-14">
					<img
						src={`http://localhost:3001/Images/${news.postImage}`}
						alt=""
						className="w-full h-full"
					/>
				</div>
				<div className="w-full my-7 text-4xl font-bold">
					<h1>{news.postTitle}</h1>
				</div>
				<div className="w-full h-auto my-5 flex flex-row items-center justify-start gap-5">
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
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								setMessage(e.target.value)
							}
							style={{
								border: `solid 2px ${colors.primary}`,
								borderRadius: "8px",
							}}
							className="w-full h-60 p-3 outline-none"
						/>
						<button
							onClick={submitComment}
							style={{background: `${colors.primary}`}}
							className={`absolute bottom-5 right-3 text-white px-2 py-1 rounded-md`}>
							Comment
						</button>
					</div>
				</div>
				<div className="w-full h-auto mt-20 flex flex-col items-center justify-center">
					<div className="w-full mb-5">
						<h1 className="text-2xl">
							All comment({comments?.comment?.length})
						</h1>
					</div>
					<div className="w-full h-auto my-6 flex flex-col items-center justify-center gap-7">
						{comments?.comment?.map((item) => {
							return <Comments item={item} comments={comments} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default News;
