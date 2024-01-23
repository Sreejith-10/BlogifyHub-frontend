import {useEffect, useState} from "react";
import HeaderNav from "../components/HeaderNav";
import UserRoute from "../routes/UserRoute";
import Info from "../components/Info";
import axios from "axios";
import toast from "react-hot-toast";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setPosts} from "../redux/newsSlice";
import {BsPlus} from "react-icons/bs";
import {colors} from "../constants/colors";
import {useNavigate} from "react-router";

const Home = () => {
	const dispatch = useAppDispatch();
	const {singlePost} = useAppSelector((state) => state.news);
	const [showInfo, setShowInfo] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		axios.get("/post/get-post").then(({data}) => {
			if (data.error) return toast.error(data.error);
			dispatch(setPosts(data));
		});
	}, [singlePost.postLikes]);
	return (
		<>
			<div className="w-full h-full flex flex-col items-center">
				<div className="w-full h-auto sticky top-0 z-50">
					<HeaderNav showInfo={showInfo} setShowInfo={setShowInfo} />
					{showInfo && <Info showInfo={showInfo} setShowInfo={setShowInfo} />}
				</div>
				<div className="w-[65%] sm:w-full sm:p-5 lg:w-[80%] xl:w-[90%] h-auto mx-auto relative sm:z-0 md:z-0 lg:z-0">
					<UserRoute setShowInfo={setShowInfo} />
				</div>
				<div
					className={`w-fit h-auto hidden sm:block md:block lg:block bg-[${colors.primary}] rounded-full fixed right-5 bottom-5 z-50`}
					onClick={() => navigate("/create")}>
					<BsPlus size={55} fill={"white"} />
				</div>
			</div>
		</>
	);
};

export default Home;
