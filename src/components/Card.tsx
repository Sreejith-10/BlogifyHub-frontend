import { FaEye, FaThumbsUp } from "react-icons/fa"
import { colors } from "../constants/colors"
import Tile from "./Tile"
import { SetState } from "../utils/types"

const Card = ({ setShowNews }: { setShowNews: SetState<boolean> }) => {
    return (
        <>
            <div onClick={() => setShowNews(true)} className="w-[300px] h-[460px] cursor-pointer border border-slate-300 flex flex-col bg-slate-100 rounded-md shadow-sm p-2 gap-4 hover:-translate-y-4 ease-out delay-200 duration-500">
                <div className="w-full h-[40%]">
                    <img src="/images/Img4.jpeg" alt="" className="w-full h-full" />
                </div>
                <div className="w-full h-[10%] flex items-center justify-between">
                    <img src="/images/images (1) (10).jpeg" alt="" className="w-16 h-w-16 rounded-full" />
                    <h1 className={`text-[${colors.primary}] font-bold text-xl`}>Goku</h1>
                    <h1 className={`text-[${colors.primary}] font-thin text-md`}>12 hr ago</h1>
                </div>
                <div className="w-full h-[35%] overflow-hidden line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, animi! A officia excepturi blanditiis officiis in adipisci provident doloribus ratione.
                </div>
                <div className="w-full h-[5%]">
                    <Tile trend="html" />
                </div>
                <div className="w-full h-[5%] flex items-center gap-2">
                    <FaEye fill={`${colors.primary}`} /> 10 <FaThumbsUp fill={`${colors.primary}`} /> 8
                </div>
            </div>
        </>
    )
}

export default Card