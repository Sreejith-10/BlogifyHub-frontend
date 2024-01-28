import {FaBell, FaHome, FaSearch} from "react-icons/fa";
import {LiaBlogSolid} from "react-icons/lia";
import {useNavigate} from "react-router";
import {SetState} from "../utils/types";

const BottomNav = ({
	showSearch,
	setShowSearch,
}: {
	showSearch: boolean;
	setShowSearch: SetState<boolean>;
}) => {
	const navigate = useNavigate();
	const clickHandler = () => {
		setShowSearch(!showSearch);
		navigate("/");
	};
	return (
		<>
			<div className="w-full h-auto flex items-center justify-evenly p-5 z-50">
				<FaHome size={40} fill="white" onClick={() => navigate("/")} />
				<LiaBlogSolid
					size={40}
					fill="white"
					onClick={() => navigate("/blogs")}
				/>
				<FaSearch size={35} fill="white" onClick={clickHandler} />
				<FaBell
					size={35}
					fill="white"
					onClick={() => navigate("/notifications")}
				/>
			</div>
		</>
	);
};

export default BottomNav;
