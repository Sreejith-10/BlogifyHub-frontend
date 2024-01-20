import {PostDataType} from "../utils/types";

const General = ({postData}: {postData: PostDataType | undefined}) => {
	return (
		<>
			<div className="w-full h-auto flex flex-col gap-5">
				<div className="w-full h-auto">
					<h2 className="font-medium text-lg">Views</h2>
					<p className="font-bold text-3xl">
						{postData?.post?.postViews.length}
					</p>
				</div>
				<div className="w-full h-auto grid grid-cols-2 grid-rows-2 gap-5">
					<div>
						<h2 className="font-medium text-lg">Like</h2>
						<p className="font-bold text-3xl">
							{postData?.post?.postLikes?.length}
						</p>
					</div>
					<div>
						<h2 className="font-medium text-lg">Comments</h2>
						<p className="font-bold text-3xl">
							{postData?.comment?.comment?.length}
						</p>
					</div>
					<div>
						<h2 className="font-medium text-lg">Followers</h2>
						<p className="font-bold text-3xl">2</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default General;
