import {useEffect, useState} from "react";
import HeaderNav from "../components/HeaderNav";
import UserRoute from "../routes/UserRoute";
import Info from "../components/Info";
import axios from "axios";
import toast from "react-hot-toast";
import {useAppDispatch} from "../hooks";
import {setPosts} from "../redux/newsSlice";

const Home = () => {
	const dispatch = useAppDispatch();
	const [showInfo, setShowInfo] = useState(false);
	useEffect(() => {
		axios.get("/post/get-post").then(({data}) => {
			if (data.error) return toast.error(data.error);
			dispatch(setPosts(data));
		});
	}, []);
	return (
		<div className="w-full h-full">
			<HeaderNav showInfo={showInfo} setShowInfo={setShowInfo} />
			{showInfo && <Info showInfo={showInfo} setShowInfo={setShowInfo} />}
			<div className="w-[65%] sm:w-full sm:p-5 h-auto mx-auto relative">
				<UserRoute setShowInfo={setShowInfo} />
			</div>
		</div>
	);
};

export default Home;
