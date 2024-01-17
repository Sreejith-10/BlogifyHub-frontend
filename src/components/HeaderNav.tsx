import {FaBell, FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router";
import {useState} from "react";
import {motion} from "framer-motion";
import {colors} from "../constants/colors";
import {useAppSelector} from "../hooks";
import {imgages} from "../constants/images";
import {BsMenuButton} from "react-icons/bs";
import {FaRegWindowClose} from "react-icons/fa";
import {Link} from "react-router-dom";
import {SetState} from "../utils/types";

type HeaderNavProps = {
	showInfo: boolean;
	setShowInfo: SetState<boolean>;
};

const HeaderNav = ({showInfo, setShowInfo}: HeaderNavProps) => {
	const navigate = useNavigate();
	const {accountComplete} = useAppSelector((state) => state.auth);
	const {userProfile} = useAppSelector((state) => state.user);
	const [showSearch, setShowSearch] = useState<boolean>(false);
	const [showNav, setShowNav] = useState(false);
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
				<div className="h-[70px] sm:h-20 flex items-center justify-between p-5 sm:p-2 z-[99] bg-[rgba(255,255,255,.4)] backdrop-blur-sm rounded-lg shadow-xl border-2 border-[#0e4c94] border-opacity-70">
					<div
						className={`w-[30%] font-bold text-4xl text-[#0e4c94] lg:hidden md:hidden ml-10`}>
						BlogifyHub
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
					<div className="hidden sm:block md:block lg:block p-5">
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
					<div className="w-[30%] md:w-full sm:w-full flex items-center">
						<div className="w-1/2 h-[40px]  flex items-center justify-end">
							<motion.div
								className="w-full h-full"
								variants={{
									hidden: {opacity: 0, y: -100},
									visible: {opacity: 1, y: 0},
								}}
								initial="hidden"
								animate={showSearch ? "visible" : "hidden"}>
								<input
									className="w-full h-full border-2 border-slate-500 outline-none p-3 rounded-md"
									placeholder="Enter topic or tag"
								/>
							</motion.div>
						</div>
						<div className="w-1/2  flex items-center justify-evenly lg:gap-5">
							<span
								onClick={() => setShowSearch(!showSearch)}
								className="cursor-pointer">
								<FaSearch className={`w-7 h-7 fill-[#0e4c94] cursor-pointer`} />
							</span>
							<span onClick={() => navigate("/notification")}>
								<FaBell className={`w-7 h-7 fill-[#0e4c94] cursor-pointer`} />
							</span>
							{isLogged ? (
								<img
									src={
										userProfile
											? `http://localhost:3001/Images/${userProfile?.profileImg}`
											: imgages.DefaultImg
									}
									className="w-14 h-14 rounded-full cursor-pointer"
									onClick={() => setShowInfo(!showInfo)}
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
					className={`w-[95%] h-auto hidden xl:hidden xls:hidden lg:block sm:block md:block bg-[#0e4c94] absolute translate-[-50%,-50%] rounded-lg mt-5 ${
						showNav ? "z-[99]" : "z-0"
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
