import {FaEye, FaRegEdit, FaThumbsUp} from "react-icons/fa";
import {colors} from "../constants/colors";
import {Post, UserProfile} from "../utils/types";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setSingleNews} from "../redux/newsSlice";
import {BsTrash} from "react-icons/bs";
import {BiSolidBarChartAlt2} from "react-icons/bi";

type CardProp = {
	edit: boolean;
	item: Post;
	deletePost?: (id: string | undefined) => void;
	editPost?: (data: Post) => void;
};

const Card = ({edit, item, deletePost, editPost}: CardProp) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {userProfile} = useAppSelector((state) => state.user);
	const [user, setUser] = useState<UserProfile>();
	useEffect(() => {
		try {
			axios
				.get(`/user/get-user/${item.userId}`)
				.then(({data}) => setUser(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, [item]);
	const onClickHandler = async () => {
		try {
			if (userProfile) {
				const currentUser = userProfile?.userId;
				const postId = item._id;
				axios
					.post(
						"/post/add-view",
						{currentUser, postId},
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					)
					.catch((err) => console.log(err));
			}
			dispatch(setSingleNews(item));
			navigate("/news");
		} catch (err) {
			console.log(err);
		}
	};
	const deleteHandler = () => {
		if (deletePost) deletePost(item._id);
	};
	const editHandler = () => {
		if (editPost) editPost(item);
	};
	return (
		<>
			<div className="w-[300px] h-[460px] sm:h-[600px] md:w-full md:h-[600px] cursor-pointer border border-slate-300 bg-slate-100 rounded-md shadow-sm p-2 gap-4 hover:-translate-y-4 hover:shadow-2xl ease-out delay-200 duration-500">
				<div
					onClick={onClickHandler}
					className="w-full h-[95%] flex flex-col items-center justify-evenly ">
					<div className="w-full h-[40%] sm:h-[55%] md:h-[55%]">
						<img
							src={`http://localhost:3001/Images/${item?.postImage}`}
							alt=""
							className="w-full h-full"
						/>
					</div>
					<div className="w-full h-[10%] mt-2 flex items-center justify-between">
						<img
							src={`http://localhost:3001/Images/${user?.profileImg}`}
							alt=""
							className="w-12 h-12 rounded-full"
						/>
						<h1 className={`text-[${colors.primary}] w-fit font-bold text-lg`}>
							{user?.fname + " " + user?.lname}
						</h1>
						<h1 className={`text-[${colors.primary}] font-thin text-md`}>
							{/* {date} */}
						</h1>
					</div>
					<div className="w-full h-[35%] overflow-hidden line-clamp-6">
						{item?.postDescription}
					</div>
					<div className="w-full h-auto flex gap-3">
						{item?.postTags?.map((tag, id) => (
							<label
								key={id}
								className="w-auto h-auto px-2 py-1 rounded-md shadow-md text-slate-700 cursor-pointer bg-slate-200 hover:bg-white hover:shadow-slate-600 hover:shadow-sm hover:text-slate-500">
								{tag}
							</label>
						))}
					</div>
				</div>
				<div className="w-full h-[5%] flex flex-row items-center justify-between">
					<div className="w-1/2 h-auto flex items-center justify-start gap-4">
						<FaEye fill={`${colors.primary}`} /> {item?.postViews?.length}{" "}
						<FaThumbsUp fill={`${colors.primary}`} /> {item?.postLikes?.length}
					</div>
					<div
						className={`w-1/2 h-full flex flex-row items-center justify-center gap-5 ${
							edit ? "block" : "invisible"
						}`}>
						<span>
							<FaRegEdit
								onClick={editHandler}
								size={23}
								className={`fill-[${colors.primary}] hover:fill-green-500 ease-in-out delay-200`}
							/>
						</span>
						<span>
							<BsTrash
								onClick={deleteHandler}
								size={23}
								className={`fill-[${colors.primary}] hover:fill-red-500 transition-colors`}
							/>
						</span>
						<span>
							<BiSolidBarChartAlt2
								onClick={() =>
									navigate("/statistics", {state: {postId: item._id}})
								}
								size={23}
								className={`fill-[${colors.primary}]`}
							/>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
