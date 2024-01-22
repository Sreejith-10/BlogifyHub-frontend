import {PostDataType} from "../utils/types";

const LikeList = ({postData}: {postData: PostDataType | undefined}) => {
	return (
		<div className="w-full h-auto">
			<ul className="w-full flex flex-col gap-5">
				{postData?.likedUsers.map((item, id) => (
					<li
						className="w-full h-28 bg-slate-50 p-5 flex items-center  gap-5 rounded-xl border border-slate-500 border-opacity-50"
						key={id}>
						<img
							src={`http://localhost:3001/Images/${item.profileImg}`}
							alt=""
							className="w-16 h-16 rounded-full"
						/>
						<p className="text-xl font-semibold">
							{item?.fname + " " + item?.lname}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LikeList;
