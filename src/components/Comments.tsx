import {colors} from "../constants/colors";
import {useEffect, useState} from "react";
import Reply from "./Reply";
import CommentInput from "./CommentInput";
import {CommentType, SingleComment, UserProfile} from "../utils/types";
import {fetchUser} from "../utils/fetch";
import {BsThreeDotsVertical} from "react-icons/bs";
import DropDown from "./DropDown";
import {useAppSelector} from "../hooks";
import {getTime} from "../utils/time";

const Comments = ({
	item,
	comments,
}: {
	item: SingleComment;
	comments: CommentType;
}) => {
	const {userProfile} = useAppSelector((state) => state.user);
	const [showMoreReplies, setShowMoreReplies] = useState(false);
	const [showDropDown, setShowDropDown] = useState(false);
	const [sender, setSender] = useState<UserProfile>();
	const [showInput, setShowInput] = useState(false);

	const showReply = () => {
		setShowMoreReplies(!showMoreReplies);
	};

	useEffect(() => {
		fetchUser(item.senderId)
			.then((res) => setSender(res))
			.catch((err) => console.log(err));
	}, [item]);

	const time = getTime(item.time);
	return (
		<>
			<div className="w-[60%] sm:w-full h-auto rounded-md bg-slate-200 p-5 flex flex-col items-center justify-center gap-8 cursor-pointer relative">
				<DropDown
					step={true}
					item={item}
					showDropDown={showDropDown}
					postId={comments.postId}
					id={item._id}
					style={{top: "76px", right: "24px"}}
					setShowInput={setShowInput}
					setShowDropDown={setShowDropDown}
				/>
				<div className="w-full h-[10%] flex items-center gap-5">
					<img
						src={sender?.profileImg}
						alt=""
						className="w-16 h-16 rounded-full"
					/>
					<h1
						className={`text-[${colors.primary}] w-full font-bold text-xl flex`}>
						{sender?.fname + " " + sender?.lname}
					</h1>
					<h1
						className={`text-[${colors.primary}] font-thin text-md text-end w-full`}>
						{time}
					</h1>
					{userProfile?.userId === sender?.userId && (
						<BsThreeDotsVertical
							size={50}
							fill={`${colors.primary}`}
							onClick={() => setShowDropDown(!showDropDown)}
						/>
					)}
				</div>
				<div className="w-full">{item.senderMessage}</div>
				<div className="w-full">
					{!showInput ? (
						<div className="w-full flex gap-5">
							<h1 onClick={() => setShowInput(true)}>Reply</h1>{" "}
							{item.replies?.length}
							<h1 onClick={showReply} className="w-full text-end">
								Replies...
							</h1>
						</div>
					) : (
						<CommentInput showInputField={setShowInput} comment={item} />
					)}
				</div>
				{item.replies?.map((r, id) => (
					<Reply
						id={item._id}
						reply={r}
						showMoreReplies={showMoreReplies}
						comments={comments}
						commentId={item._id}
						key={id}
					/>
				))}
			</div>
		</>
	);
};

export default Comments;
