import axios from "axios";
import {useState} from "react";
import {BsArrowLeft} from "react-icons/bs";
import {ReplyType, SetState, SingleComment} from "../utils/types";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setComment} from "../redux/newsSlice";
import {setEditState} from "../redux/helperSlice";
import {io} from "socket.io-client";

const CommentInput = ({
	id,
	showInputField,
	comment,
	reply,
}: {
	id?: string;
	showInputField: SetState<boolean>;
	comment?: SingleComment;
	reply?: ReplyType;
}) => {
	
	const socket = io("https://blogifyhub-3tr0.onrender.com");

	const dispatch = useAppDispatch();
	const {user} = useAppSelector((state) => state.auth);
	const {news} = useAppSelector((state) => state.news);
	const {comments} = useAppSelector((state) => state.news);
	const {edit} = useAppSelector((state) => state.helper);
	const [text, setText] = useState("");
	const [editText, setEditText] = useState(
		comment ? comment.senderMessage : reply?.replierMessage
	);
	const submitReply = () => {
		try {
			axios
				.post(
					"/comment/post-reply",
					{
						commentId: comment?._id,
						currentUser: user?.id,
						postId: comments.postId,
						reply: text,
						commentUser: comment?.senderId,
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				)
				.then(({data}) => {
					if (data) {
						axios
							.get(`/comment/get-all-comment/${news._id}`)
							.then(({data}) => dispatch(setComment(data)))
							.catch((err) => console.log(err));
					}
				});
			socket.emit("join_room", comment?.senderId);
			socket.emit("reply_comment", comment?.senderId);
			setText("");
			showInputField(false);
		} catch (err) {
			console.log(err);
		}
	};
	const update = async () => {
		try {
			const postId = news._id;
			const commentId = comment?._id;
			const replyId = reply?._id;
			const postRef = id;
			axios
				.post(
					comment ? "/comment/edit-comment" : "/comment/edit-reply",
					{postId, commentId, replyId, editText, postRef},
					{headers: {"Content-Type": "application/json"}}
				)
				.then(({data}) => dispatch(setComment(data)))
				.catch((err) => console.log(err));
			showInputField(false);
		} catch (err) {
			console.log(err);
		}
	};
	const editFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditText(e.target.value);
	};
	return (
		<div className="w-full h-auto gap-3 flex items-center justify-evenly">
			<BsArrowLeft
				onClick={() => {
					showInputField(false);
					dispatch(setEditState(false));
				}}
				size={30}
				className="hover:fill-white hover:bg-[#0e4c94] rounded-full ease-in delay-150 duration-150"
			/>
			{edit ? (
				<input
					value={editText}
					onChange={editFunction}
					type="text"
					className="w-[80%] border-2 border-[#0e4c94] h-10 p-2 outline-none rounded-md"
					placeholder="Comment . . . ."
				/>
			) : (
				<input
					onChange={(e) => setText(e.target.value)}
					type="text"
					className="w-[80%] border-2 border-[#0e4c94] h-10 p-2 outline-none rounded-md"
					placeholder="Comment . . . ."
				/>
			)}
			{edit ? (
				<button
					onClick={update}
					className={`bg-[#0e4c94] px-3 py-2 rounded-md text-white active:scale-90 active:shadow-inner active:shadow-black ease delay-100 duration-200`}>
					edit
				</button>
			) : (
				<button
					onClick={submitReply}
					className={`bg-[#0e4c94] px-3 py-2 rounded-md text-white active:scale-90 active:shadow-inner active:shadow-black ease delay-100 duration-200`}>
					Send
				</button>
			)}
		</div>
	);
};

export default CommentInput;
