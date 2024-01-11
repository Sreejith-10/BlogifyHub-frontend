import {colors} from "../constants/colors";
import {useEffect, useState} from "react";
import Reply from "./Reply";
import CommentInput from "./CommentInput";
import {CommentType, UserProfile} from "../utils/types";
import {fetchUser} from "../utils/fetch";

const Comments = ({item}: {item: CommentType}) => {
	const [showMoreReplies, setShowMoreReplies] = useState(false);
	const [sender, setSender] = useState<UserProfile>();
	const showReply = () => {
		setShowMoreReplies(!showMoreReplies);
	};
	const [showInput, setShowInput] = useState(false);
	const showInputField = () => {
		setShowInput(!showInput);
	};
	useEffect(() => {
		fetchUser(item.senderId).then((res) => setSender(res));
	}, []);
	return (
		<div className="w-[60%] sm:w-full h-auto rounded-md bg-slate-200 p-5 flex flex-col items-center justify-center gap-8 cursor-pointer">
			<div className="w-full h-[10%] flex items-center gap-5">
				<img
					src={`http://localhost:3001/Images/${sender?.profileImg}`}
					alt=""
					className="w-16 h-w-16 rounded-full"
				/>
				<h1
					className={`text-[${colors.primary}] w-full font-bold text-xl flex`}>
					{sender?.fname + " " + sender?.lname}
				</h1>
				<h1
					className={`text-[${colors.primary}] font-thin text-md text-end w-full`}>
					{item.time}
				</h1>
			</div>
			<div className="w-full">{item.senderMessage}</div>
			<div className="w-full">
				{!showInput ? (
					<div className="w-full flex gap-5">
						<h1 onClick={showInputField}>Reply</h1> {item?.replies?.length}
						<h1 onClick={showReply} className="w-full text-end">
							Replies...
						</h1>
					</div>
				) : (
					<CommentInput showInputField={showInputField} item={item} />
				)}
			</div>
			{item.replies?.map((r, id) => (
				<Reply reply={r} showMoreReplies={showMoreReplies} key={id} />
			))}
		</div>
	);
};

export default Comments;
