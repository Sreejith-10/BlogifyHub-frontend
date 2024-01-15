import axios from "axios";
import {motion} from "framer-motion";
import {CSSProperties} from "react";
import {useAppSelector} from "../hooks";

type DropDownProps = {showDropDown: boolean; style: CSSProperties};

const DropDown = ({showDropDown, style}: DropDownProps) => {
	const {userProfile} = useAppSelector((state) => state.user);
	const {news} = useAppSelector((state) => state.news);
	const deleteCommment = () => {
		const userId = userProfile?.userId;
		const authorId = news.userId;
		try {
			axios.post(
				"/comment/delete-comment",
				{userId, authorId},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		} catch (err) {
			console.log(err);
		}
	};

	const editComment = () => {
		console.log("edit");
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
