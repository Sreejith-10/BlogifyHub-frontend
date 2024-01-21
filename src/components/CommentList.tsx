import {useEffect} from "react";
import {PostDataType} from "../utils/types";
import axios from "axios";

const CommentList = ({postData}: {postData: PostDataType | undefined}) => {
	useEffect(() => {
		try {
			axios
				.get(`/user/get-user/${1}`)
				.then(({data}) => console.log(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<>
			<div className="w-full h-auto">
				<ul className="w-full flex flex-col gap-5">
					{postData?.comment.comment.map((item) => (
						<li
							key={item._id}
							className="w-full h-28 bg-slate-50 p-5 flex items-center  gap-5 rounded-xl border border-slate-500 border-opacity-50">
							<img src="" alt="" className="h-full rounded-full" />
							<p className="text-xl font-semibold">Son Goku</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default CommentList;
