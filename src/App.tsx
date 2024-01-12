import axios from "axios";
import PageRoute from "./routes/PageRoute";
import {Toaster} from "react-hot-toast";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks";
import {setAccountComplete, setAuth, setUser} from "./redux/authslice";
import {UserProfile, UserType} from "./utils/types";
import {setUserProfile} from "./redux/userSlice";

type ResponseType = {
	user: UserType;
	profile: UserProfile;
};

const App = () => {
	axios.defaults.baseURL = "http://localhost:3001";
	axios.defaults.withCredentials = true;
	const {user} = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!user) {
			fetchData();
		}
	}, [user]);
	const fetchData = async () => {
		const {data} = await axios.get("/profile");
		const {user, profile}: ResponseType = data;
		dispatch(setUser(user));
		dispatch(setAuth(true));
		profile
			? dispatch(setAccountComplete(true))
			: dispatch(setAccountComplete(false));
		dispatch(setUserProfile(profile));
	};
	return (
		<>
			<div className="w-screen h-screen flex items-center justify-center">
				<Toaster
					position="top-right"
					toastOptions={{duration: 1000}}
					containerStyle={{zIndex: 99, cursor: "pointer"}}
				/>
				<PageRoute />
			</div>
		</>
	);
};

export default App;
