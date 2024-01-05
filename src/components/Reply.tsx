import { BsHandThumbsUp } from "react-icons/bs"
import { motion } from "framer-motion"
import { colors } from "../constants/colors"
import { useState } from "react"
import CommentInput from "./CommentInput"

const Reply = ({ showMoreReplies }: { showMoreReplies: boolean }) => {
    const [showInput, setShowInput] = useState(false)

    const handleClick = () => {
        setShowInput(!showInput)
    }
    return (
        <motion.div variants={{
            hidden: {
                x: 100, display: "none"
            },
            visible: {
                display: "block",
                x: 0
            }
        }} initial="hidden" animate={showMoreReplies ? "visible" : "hidden"} className="w-full h-auto p-6 rounded-md bg-white flex flex-col items-center">
            <div className="w-full h-[10%] flex items-center gap-5">
                <img src="/images/images (1) (10).jpeg" alt="" className="w-16 h-w-16 rounded-full" />
                <h1 className={`text-[${colors.primary}] font-bold text-xl`}>Goku</h1>
                <h1 className={`text-[${colors.primary}] font-thin text-md text-end w-full`}>12 hr ago</h1>
            </div>
            <div className="w-full mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ex harum quisquam? Nulla libero consequatur ab consectetur facilis, quos, necessitatibus amet dolorem cum inventore odio fugiat ullam repellendus iste voluptatibus!
            </div>
            <div className="w-full mt-3">
                {!showInput ? <div className="w-full flex gap-5">
                    <BsHandThumbsUp size={25} />20
                    <h1 onClick={handleClick}>Reply</h1> 10
                </div> : <CommentInput showInputField={handleClick} />}
            </div>
        </motion.div>
    )
}

export default Reply