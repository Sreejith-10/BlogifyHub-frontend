import {imgages} from "../constants/images";
import {PostDataType} from "../utils/types";

const LikeList = ({postData}: {postData: PostDataType | undefined}) => {
	console.log(postData?.post.postLikes);
	return (
		<div className="w-full h-auto">
			<ul className="w-full flex flex-col gap-5">
				<li className="w-full h-28 bg-slate-50 p-5 flex items-center  gap-5 rounded-xl border border-slate-500 border-opacity-50">
					<img src={imgages.test2} alt="" className="h-full rounded-full" />
					<p className="text-xl font-semibold">Son Goku</p>
				</li>
			</ul>
		</div>
	);
};

export default LikeList;
