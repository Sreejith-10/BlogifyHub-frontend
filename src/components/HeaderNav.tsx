import {FaBell, FaBlog, FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router";
import {useState} from "react";
import {motion} from "framer-motion";
import {colors} from "../constants/colors";
import {useAppSelector} from "../hooks";
import {imgages} from "../constants/images";
import {BsMenuButton} from "react-icons/bs";
import {FaRegWindowClose} from "react-icons/fa";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import {SetState} from "../utils/types";

const HeaderNav = ({
	showSearch,
	setShowSearch,
}: {
	showSearch: boolean;
	setShowSearch: SetState<boolean>;
}) => {
	const navigate = useNavigate();
	const [showNav, setShowNav] = useState(false);
	const {userProfile} = useAppSelector((state) => state.user);
	const {accountComplete} = useAppSelector((state) => state.auth);
	const {isLogged} = useAppSelector((state) => state.auth);
	const route = () => {
		if (!isLogged) return navigate("/login");
		!accountComplete ? navigate("/account-setup") : navigate("/create");
	};
	const clickOn = () => {
		setShowNav(false);
		route();
	};
	return (
		<>
			<div className="w-full h-auto p-3 ">
				<div className="h-[70px] sm:h-16 flex sm:flex-row-reverse items-center justify-between p-5 sm:p-2 z-[99] bg-[rgba(255,255,255,.4)] rounded-lg shadow-xl border-2 border-[#0e4c94] border-opacity-70 backdrop-blur-sm">
					<div
						className={`w-[30%] font-bold text-4xl text-[#0e4c94] lg:hidden md:hidden ml-10 sm:w-auto sm:hidden sm:m-0`}>
						BlogifyHub
					</div>
					<div
						className={`w-[30%] font-bold text-4xl text-[#0e4c94] hidden ml-10 sm:w-auto sm:block sm:m-0`}>
						<FaBlog />
					</div>
					<div className="w-[40%] h-full sm:hidden md:hidden lg:hidden flex items-center justify-center gap-5">
						<Link
							to={"/"}
							className="text-xl hover:text-[#0e4c94] ease-in delay-200 duration-200 cursor-pointer">
							Home
						</Link>
						<Link
							to={"/blogs"}
							className="text-xl hover:text-[#0e4c94] ease-in delay-200 duration-200 cursor-pointer">
							Blogs
						</Link>
						<Link
							to={"/account"}
							className="text-xl hover:text-[#0e4c94] ease-in delay-200 duration-200 cursor-pointer">
							Account
						</Link>
						<h1
							onClick={route}
							className="text-xl sm:hidden hover:text-[#0e4c94] ease-in delay-200 duration-200 cursor-pointer">
							Create
						</h1>
					</div>
					<div className="hidden sm:hidden md:block lg:block p-5">
						{!showNav ? (
							<BsMenuButton
								size={35}
								fill="#0e4c94"
								onClick={() => setShowNav(true)}
							/>
						) : (
							<FaRegWindowClose
								size={35}
								fill="#0e4c94"
								onClick={() => setShowNav(false)}
							/>
						)}
					</div>
					<div className="w-[30%] lg:w-full md:w-full sm:w-[90%] flex items-center sm:flex-row-reverse">
						<div className="w-1/2 lg:w-full h-[40px]  flex items-center justify-end ">
							<SearchBar showSearch={showSearch} />
						</div>
						<div className="w-1/2 sm:w-[20%]  flex items-center justify-evenly lg:gap-5">
							<span
								onClick={() => setShowSearch(!showSearch)}
								className="cursor-pointer sm:hidden">
								<FaSearch className={`w-7 h-7 fill-[#0e4c94] cursor-pointer`} />
							</span>
							<span
								onClick={() => navigate("/notification")}
								className="sm:hidden">
								<FaBell className={`w-7 h-7 fill-[#0e4c94] cursor-pointer`} />
							</span>
							{isLogged ? (
								<img
									src={
										userProfile
											? `https://blogifyhub-3tr0.onrender.com/Images/${userProfile?.profileImg}`
											: imgages.DefaultImg
									}
									className="w-14 h-14 rounded-full cursor-pointer sm:w-12 sm:h-12"
									onClick={() => navigate("/account")}
								/>
							) : (
								<button
									style={{background: `${colors.primary}`}}
									className="text-white rounded-md px-3 shadow-sm"
									onClick={() => navigate("/login")}>
									Login
								</button>
							)}
						</div>
					</div>
				</div>
				<motion.div
					variants={{
						hidden: {opacity: 0, x: -100},
						visible: {opacity: 1, x: 0},
					}}
					initial="hidden"
					animate={showNav ? "visible" : "hidden"}
					className={`w-[95%] h-auto hidden lg:block  md:block bg-[#0e4c94]  translate-[-50%,-50%] rounded-lg mt-5 -z-10 ${
						showNav
							? "z-[99] absolute"
							: "z-0 sm:hidden md:hidden lg:hidden xl:hidden xls:hidden"
					}`}>
					<div className=" h-full flex items-center justify-center flex-col gap-8 p-5 z-[99]">
						<Link
							to={"/"}
							onClick={() => setShowNav(false)}
							className="text-xl text-white ease-in delay-200 duration-200 cursor-pointer">
							Home
						</Link>
						<Link
							to={"/blogs"}
							onClick={() => setShowNav(false)}
							className="text-xl text-white ease-in delay-200 duration-200 cursor-pointer">
							Blogs
						</Link>
						<Link
							to={"/account"}
							onClick={() => setShowNav(false)}
							className="text-xl text-white ease-in delay-200 duration-200 cursor-pointer">
							Account
						</Link>
						<h1
							onClick={clickOn}
							className="text-xl text-white ease-in delay-200 duration-200 cursor-pointer">
							Create
						</h1>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default HeaderNav;
