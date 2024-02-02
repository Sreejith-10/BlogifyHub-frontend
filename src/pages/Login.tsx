import axios from "axios";
import {useState} from "react";
import toast from "react-hot-toast";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks";
import {setAccountComplete, setAuth, setUser} from "../redux/authslice";
import {setUserProfile} from "../redux/userSlice";
import Loader from "../components/Loader";

type UserDataType = {
	email: string;
	password: string;
};

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [showPass, setShowPass] = useState<boolean>(false);
	const [userData, setUserData] = useState<UserDataType>({
		email: "",
		password: "",
	});
	const [loader, setLoader] = useState(false);
	const ClickHandler = (bool: boolean) => {
		setShowPass(bool);
	};
	const logInUser = async () => {
		try {
			setLoader(true);
			const {email, password} = userData;
			const {data} = await axios.post("/login", {email, password});
			if (data.error) {
				toast.error(data.error);
			} else {
				toast.success("Login in success");
				dispatch(setUser(data.user));
				dispatch(setAuth(true));
				dispatch(setAccountComplete(data.ok));
				dispatch(setUserProfile(data.ok));
				navigate("/");
			}
			setLoader(false);
		} catch (error) {
			console.log(error);
			setLoader(false);
		}
	};
	return (
		<>
			<div className="w-[450px] h-[500px] sm:w-[350px] p-10 sm:px-8 bg-slate-200 rounded-md shadow-md flex items-center justify-between flex-col">
				<div className="w-[90%] h-[100px] flex flex-col">
					<h1 className="text-3xl font-bold text-slate-800">Login</h1>
				</div>
				<div className="w-[90%] h-[100px] flex flex-col">
					<label htmlFor="" className="text-slate-700">
						Email
					</label>
					<input
						onChange={(e) =>
							setUserData((prev) => ({...prev, email: e.target.value}))
						}
						type="email"
						className="h-10 rounded-md outline-none p-2 border border-slate-400"
						required
					/>
				</div>
				<div className="w-[90%] h-[100px] flex flex-col">
					<label htmlFor="" className="text-slate-700">
						Password
					</label>
					<div className="h-10 w-full relative">
						<input
							onChange={(e) =>
								setUserData((prev) => ({...prev, password: e.target.value}))
							}
							type={!showPass ? "password" : "text"}
							className="h-full w-full rounded-md outline-none p-2 border border-slate-400"
							required
						/>
						<div className="absolute z-50 flex right-3 top-3 cursor-pointer">
							{showPass ? (
								<span onClick={() => ClickHandler(false)}>
									<FaEyeSlash />
								</span>
							) : (
								<span onClick={() => ClickHandler(true)}>
									<FaEye />
								</span>
							)}
						</div>
					</div>
				</div>
				<div className="w-[90%] h-[200px] flex flex-col items-center justify-evenly">
					<button
						disabled={loader ? true : false}
						onClick={logInUser}
						className="w-full py-3 md:py-2 bg-pink-600 rounded-md text-white shadow-md shadow-pink-500 hover:shadow-pink-800 active:translate-y-1 active:shadow-inner active:shadow-slate-400 relative disabled:active:translate-y-0 disabled:active:shadow-none disabled:hover:shadow-none disabled:shadow-none">
						Log in
						{loader && (
							<div className="w-10 h-10 sm:h-8 sm:w-8 absolute right-2 top-1">
								<Loader />
							</div>
						)}
					</button>
					<span className="bg-slate-500 px-2 py-2 text-white rounded-full flex items-center justify-center relative chain">
						OR
					</span>
					<span className="text-slate-600 font-light">
						New user? {"   "}
						<Link to={"/signup"} className="font-medium hover:text-pink-600">
							SIGNUP
						</Link>
					</span>
				</div>
			</div>
		</>
	);
};

export default Login;
