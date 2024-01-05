import { FaBell, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion"
import { colors } from "../constants/colors";
import { useAppSelector } from "../hooks";
import { imgages } from "../constants/images";
import { SetState } from "../utils/types";

const HeaderNav = ({ setShowForm }: { setShowForm: SetState<boolean> }) => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const { isLogged } = useAppSelector((state) => state.auth)
    return (
        <>
            <div className="w-full h-24 sm:h-20 flex items-center justify-between p-5">
                <div className={`w-[30%] font-bold text-4xl text-[#0e4c94] md:hidden ml-10`}>BlogifyHub</div>
                <div className="w-[40%] h-full sm:hidden flex items-center justify-center gap-5">
                    <h1 className="text-xl hover:text-[#0e4c94] ease-in delay-200 duration-200 cursor-pointer">About</h1>
                    <h1 className="text-xl hover:text-[#0e4c94] ease-in delay-200 duration-200 cursor-pointer">Blogs</h1>
                    <h1 className="text-xl hover:text-[#0e4c94] ease-in delay-200 duration-200 cursor-pointer">Account</h1>
                    <h1 onClick={() => setShowForm(prev => !prev)} className="text-xl hover:text-[#0e4c94] ease-in delay-200 duration-200 cursor-pointer">Create</h1>
                </div>
                <div>
                
                </div>
                <div className="w-[30%] md:w-full sm:w-full flex items-center">
                    <div className="w-1/2 h-[40px]  flex items-center justify-end">
                        <motion.div className="w-full h-full" variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 }
                        }} initial="hidden" animate={showSearch ? "visible" : "hidden"}>
                            <input className="w-full h-full border-2 border-slate-500 outline-none p-3 rounded-md" placeholder="Enter topic or tag" />
                        </motion.div>
                    </div>
                    <div className="w-1/2  flex items-center justify-evenly">
                        <span onClick={() => setShowSearch(!showSearch)} className="cursor-pointer">
                            <FaSearch className={`w-7 h-7 fill-[#0e4c94] cursor-pointer`} />
                        </span>
                        <span>
                            <FaBell className={`w-7 h-7 fill-[#0e4c94] cursor-pointer`} />
                        </span>
                        {!isLogged ? <img src={imgages.DefaultImg} className="w-14 h-14" /> : <button style={{ background: `${colors.primary}` }} className="text-white rounded-md px-3 shadow-sm"
                            onClick={() => navigate("/login")}>
                            Login
                        </button>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNav;
