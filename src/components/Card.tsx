import {FaEye, FaThumbsUp} from "react-icons/fa";
import {colors} from "../constants/colors";
import {Post, SetState} from "../utils/types";
import {useEffect} from "react";
import axios from "axios";

const Card = ({
	item,
	setShowNews,
}: {
	item: Post;
	setShowNews: SetState<boolean>;
}) => {
	useEffect(() => {
		axios
			.post("/user/get-user", item.userId, {
				headers: {"Content-Type": "application/json"},
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div
				onClick={() => setShowNews(true)}
				className="w-[300px] h-[460px] sm:w-full md:w-full cursor-pointer border border-slate-300 flex flex-col bg-slate-100 rounded-md shadow-sm p-2 gap-4 hover:-translate-y-4 ease-out delay-200 duration-500">
				<div className="w-full h-[40%]">
					<img
						src={`http://localhost:3001/Images/${item?.postImage}`}
						alt=""
						className="w-full h-full"
					/>
				</div>
				<div className="w-full h-[10%] flex items-center justify-between">
					<img
						src="/images/images (1) (10).jpeg"
						alt=""
						className="w-16 h-w-16 rounded-full"
					/>
					<h1 className={`text-[${colors.primary}] font-bold text-xl`}>Goku</h1>
					<h1 className={`text-[${colors.primary}] font-thin text-md`}>
						12 hr ago
					</h1>
				</div>
				<div className="w-full h-[35%] overflow-hidden line-clamp-3">
					{item?.postDescription}
				</div>
				<div className="w-full h-auto">
					{item?.postTags?.map((tag, id) => (
						<label
							key={id}
							className="w-auto h-auto px-2 py-1 rounded-md shadow-md text-slate-700 cursor-pointer bg-slate-200 hover:bg-white hover:shadow-slate-600 hover:shadow-sm hover:text-slate-500">
							{tag}
						</label>
					))}
				</div>
				<div className="w-full h-[5%] flex items-center gap-2">
					<FaEye fill={`${colors.primary}`} /> 10{" "}
					<FaThumbsUp fill={`${colors.primary}`} /> 8
				</div>
			</div>
		</>
	);
};

export default Card;
