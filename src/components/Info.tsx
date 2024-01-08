import { motion } from "framer-motion";
import { SetState } from "../utils/types";
import axios from "axios";
import { useAppDispatch } from "../hooks";
import toast from "react-hot-toast";
import { setAccountComplete, setAuth, setUser } from "../redux/authslice";
import { setUserProfile } from "../redux/userSlice";

type InfoProps = {
	showInfo: boolean;
	setShowInfo: SetState<boolean>;
};

const Info = ({ showInfo, setShowInfo }: InfoProps) => {
	const dispatch = useAppDispatch();
	const logOutUser = async () => {
		await axios
			.get("/logout")
			.then((res) => {
				toast.success(res.data);
				dispatch(setUser(null));
				dispatch(setAuth(false));
				dispatch(setUserProfile(null));
				dispatch(setAccountComplete(false));
				setShowInfo(false);
			})
			.catch((err) => console.log(err));
	};
	return (
		<>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						x: 100,
					},
					visible: {
						opacity: 1,
						x: -20,
					},
				}}
				initial="hidden"
				animate={showInfo ? "visible" : "hidden"}
				transition={{ delay: 0.2, duration: 0.5, ease: "easeIn" }}
				className="w-52 h-20 absolute rounded-md bg-slate-100 right-16 border-2 z-[99] border-[#0e4c94] flex items-center justify-center">
				<button
					onClick={logOutUser}
					className="bg-red-500 py-1 px-2 text-white rounded-md">
					Log out
				</button>
			</motion.div>
		</>
	);
};

export default Info;
