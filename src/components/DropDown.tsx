import axios from "axios";
import {motion} from "framer-motion";
import {CSSProperties} from "react";
import {ReplyType, SetState, SingleComment} from "../utils/types";
import {useAppDispatch} from "../hooks";
import {setComment} from "../redux/newsSlice";
import {setEditState} from "../redux/helperSlice";

type DropDownProps = {
	step: boolean;
	item?: SingleComment | ReplyType;
	showDropDown: boolean;
	postId: string;
	id: string;
	style: CSSProperties;
	setShowInput: SetState<boolean>;
	setShowDropDown: SetState<boolean>;
};

const DropDown = ({
	step,
	item,
	showDropDown,
	postId,
	id,
	style,
	setShowInput,
	setShowDropDown,
}: DropDownProps) => {
	const dispatch = useAppDispatch();
	const deleteCommment = () => {
		const commenterId = item?._id;
		const replierId = item?._id;
		try {
			axios
				.post(
					`${step ? "/comment/delete-comment" : "/comment/delete-reply"}`,
					{postId, commenterId, replierId, id},
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				)
				.then(({data}) => dispatch(setComment(data)))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	};

	const editComment = () => {
		setShowInput(true);
		setShowDropDown(false);
		dispatch(setEditState(true));
	};

	return (
		<>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						scale: 0,
					},
					visible: {
						opacity: 1,
						scale: 1,
					},
				}}
				style={style}
				initial="hidden"
				animate={showDropDown ? "visible" : "hidden"}
				className="rounded-md shadow-md absolute top-20 right-6 bg-white p-3 border border-slate-500 border-opacity-30">
				<ul className="list-none flex items-center justify-center flex-col gap-3 z-50">
					<li onClick={editComment} className="hover:text-green-500">
						Edit
					</li>
					<li onClick={deleteCommment} className="hover:text-red-500">
						Delete
					</li>
				</ul>
			</motion.div>
		</>
	);
};

export default DropDown;
