import {BsHandThumbsUp} from "react-icons/bs";
import {colors} from "../constants/colors";
import {useState} from "react";
import Reply from "./Reply";
import CommentInput from "./CommentInput";
import {CommentType} from "../utils/types";

const Comments = ({item}: {item: CommentType}) => {
	const [showMoreReplies, setShowMoreReplies] = useState(false);
	const showReply = () => {
		setShowMoreReplies(!showMoreReplies);
	};
	const [showInput, setShowInput] = useState(false);
	const showInputField = () => {
        setShowInput(!showInput);
	};
	return (
		<div className="w-[60%] sm:w-full h-auto rounded-md bg-slate-200 p-5 flex flex-col items-center justify-center gap-8 cursor-pointer">
			<div className="w-full h-[10%] flex items-center gap-5">
				<img
					src="/images/images (1) (10).jpeg"
					alt=""
					className="w-16 h-w-16 rounded-full"
				/>
				<h1 className={`text-[${colors.primary}] font-bold text-xl`}>Goku</h1>
				<h1
					className={`text-[${colors.primary}] font-thin text-md text-end w-full`}>
					12 hr ago
				</h1>
			</div>
			<div className="w-full">{item.senderMessage}</div>
			<div className="w-full">
				{!showInput ? (
					<div className="w-full flex gap-5">
						<BsHandThumbsUp size={25} />
						20
						<h1 onClick={showInputField}>Reply</h1> 10
						<h1 onClick={showReply} className="w-full text-end">
							Replies...
						</h1>
					</div>
				) : (
					<CommentInput showInputField={showInputField} />
				)}
			</div>
			<Reply showMoreReplies={showMoreReplies} />
			<Reply showMoreReplies={showMoreReplies} />
			<Reply showMoreReplies={showMoreReplies} />
		</div>
	);
};

export default Comments;
