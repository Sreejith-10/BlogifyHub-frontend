import {PostDataType} from "../utils/types";
import UserInfo from "./UserInfo";

const ViewList = ({postData}: {postData: PostDataType | undefined}) => {
	return (
		<>
			<div className="w-full h-auto">
				<ul className="w-full flex flex-col gap-5">
					{postData?.postViewers.map((item, id) => (
						<UserInfo item={item} key={id} />
					))}
				</ul>
			</div>
		</>
	);
};

export default ViewList;
