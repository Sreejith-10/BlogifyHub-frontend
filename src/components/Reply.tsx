import {BsHandThumbsUp, BsThreeDotsVertical} from "react-icons/bs";
import {motion} from "framer-motion";
import {colors} from "../constants/colors";
import {useEffect, useState} from "react";
import CommentInput from "./CommentInput";
import {ReplyType, UserProfile} from "../utils/types";
import {fetchUser} from "../utils/fetch";
import DropDown from "./DropDown";
import {useAppSelector} from "../hooks";

type ReplyProps = {
	reply: ReplyType;
	showMoreReplies: boolean;
};

const Reply = ({reply, showMoreReplies}: ReplyProps) => {
	const {userProfile} = useAppSelector((state) => state.user);
	const [showInput, setShowInput] = useState(false);
	const [user, setUser] = useState<UserProfile>();
	const [dropDown, setDropDown] = useState(false);

	const handleClick = () => {
		setShowInput(!showInput);
	};
	useEffect(() => {
		fetchUser(reply.replierId).then((res) => setUser(res));
	}, []);

	return (
		<motion.div
			variants={{
				hidden: {
					x: 100,
					display: "none",
				},
				visible: {
					display: "block",
					x: 0,
				},
			}}
			initial="hidden"
			animate={showMoreReplies ? "visible" : "hidden"}
			className="w-full h-auto p-6 rounded-md bg-white flex flex-col items-center">
			<div className="w-full h-[10%] flex items-center gap-5 relative">
				<DropDown
					showDropDown={dropDown}
					style={{top: "50px", right: "10px", background: "rgb(226, 232, 240)"}}
				/>
				<img
					src={`http://localhost:3001/Images/${user?.profileImg}`}
					alt=""
					className="w-12 h-12 rounded-full"
				/>
				<h1 className={`text-[${colors.primary}] w-full font-bold text-xl`}>
					{user?.fname + " " + user?.lname}
				</h1>
				<h1
					className={`text-[${colors.primary}] font-thin text-md text-end w-full`}>
					{reply.time}
				</h1>
				{userProfile?.userId === reply.replierId && (
					<BsThreeDotsVertical
						size={50}
						fill={`${colors.primary}`}
						onClick={() => setDropDown(!dropDown)}
					/>
				)}
			</div>
			<div className="w-full mt-4">{reply.replierMessage}</div>
			<div className="w-full mt-3">
				{!showInput ? (
					<div className="w-full flex gap-5">
						<BsHandThumbsUp size={25} />
						20
						<h1 onClick={handleClick}>Reply</h1> 10
					</div>
				) : (
					<CommentInput showInputField={handleClick} />
				)}
			</div>
		</motion.div>
	);
};

export default Reply;
