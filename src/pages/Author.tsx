import {BsPersonFill} from "react-icons/bs";
import {BiSolidLike} from "react-icons/bi";
import {PiSignpostFill} from "react-icons/pi";
import {useAppSelector} from "../hooks";
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/Card";
import FollowButton from "../components/FollowButton";
import Tooltip from "../components/Tooltip";

const Author = () => {
	const {author} = useAppSelector((state) => state.user);
	const [postCount, setPostCount] = useState(0);
	const [likeCount, setLikeCount] = useState(0);
	const {posts} = useAppSelector((state) => state.news);
	useEffect(() => {
		try {
			axios
				.get(`/post/get-post-count/${author?.userId}`)
				.then(({data}) => setPostCount(data))
				.catch((err) => console.log(err));
			axios
				.get(`/post/get-like-count/${author?.userId}`)
				.then(({data}) => setLikeCount(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);

	const post = posts
		.filter((item) => item.userId === author?.userId)
		.map((item, id) => <Card item={item} key={id} edit={false} />);
	return (
		<>
			<div className="w-full h-full">
				<div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 rounded-md border border-slate-300 mt-5 cursor-pointer">
					<div className="flex items-center flex-col justify-center gap-10">
						<div className="w-full h-1/2 flex items-center justify-center flex-col gap-5 mt-5">
							<div className="w-60 h-60">
								<img
									src={`http://localhost:3001/Images/${author?.profileImg}`}
									alt=""
									className="w-full h-full shadow-md rounded-full"
								/>
							</div>
							<div className="flex items-center justify-center flex-col gap-3">
								<h1 className="font-bold text-3xl">
									{author?.fname + " " + author?.lname}
								</h1>
								<h1 className="font-medium text-2xl">{author?.profession}</h1>
							</div>
						</div>
						<div className="w-full h-auto flex items-center justify-evenly">
							<Tooltip text="likes">
							<div className="flex flex-col items-center justify-center gap-2">
								<BiSolidLike size={50} className="fill-[#0e4c94]" />
								<h1 className="font-bold text-xl">{likeCount}</h1>
							</div>
							</Tooltip>
							<div className="flex flex-col items-center justify-center gap-2">
								<BsPersonFill size={50} className="fill-[#0e4c94]" />
								<h1 className="font-bold text-xl">
									{author?.followers.length}
								</h1>
							</div>
							<div className="flex flex-col items-center justify-center gap-2">
								<PiSignpostFill size={50} className="fill-[#0e4c94]" />
								<h1 className="font-bold text-xl">{postCount}</h1>
							</div>
						</div>
						<div>
							<FollowButton author={author} />
						</div>
						<div className="w-full h-auto flex flex-wrap items-center justify-center gap-8 sm:px-5 mb-5">
							{post}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Author;
