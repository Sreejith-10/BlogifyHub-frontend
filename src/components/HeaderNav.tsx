import { FaBell, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion"
import { colors } from "../constants/colors";

const HeaderNav = () => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState<boolean>(false)
    return (
        <>
            <div className="w-full h-16 sm:h-20 flex items-center justify-between p-5">
                <div className={`font-bold text-4xl text-[#0e4c94] md:hidden`}>BlogifyHub</div>
                <div className="w-[40%] md:w-full sm:w-full flex items-center">
                    <div className="w-1/2 h-[40px]  flex items-center justify-end">
                        <motion.div className="w-full h-full" variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 }
                        }} initial="hidden" animate={showSearch ? "visible" : "hidden"}>
                            <input className="w-full h-full border-2 border-slate-500 outline-none p-3 rounded-md" placeholder="Enter topic or tag" />
                        </motion.div>
                    </div>
                    <div className="w-1/2  flex justify-evenly">
                        <span onClick={() => setShowSearch(!showSearch)} className="cursor-pointer">
                            <FaSearch className={`w-7 h-7 fill-[#0e4c94] cursor-pointer`} />
                        </span>
                        <span>
                            <FaBell className={`w-7 h-7 fill-[#0e4c94] cursor-pointer`} />
                        </span>
                        <button style={{background:`${colors.primary}`}} className="text-white rounded-md px-3 shadow-sm"
                            onClick={() => navigate("/login")}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNav;
