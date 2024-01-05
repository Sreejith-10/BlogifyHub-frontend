import { BsArrowLeft } from "react-icons/bs"

const CommentInput = ({ showInputField }: { showInputField: () => void }) => {
    return (
        <div className="w-full h-auto flex items-center justify-evenly">
            <BsArrowLeft onClick={showInputField} size={30} className="hover:fill-white hover:bg-[#0e4c94] rounded-full ease-in delay-150 duration-150" />
            <input type="text" className="w-[80%] border-2 border-[#0e4c94] h-10 p-2 outline-none rounded-md" placeholder="Comment . . . ."/>
            <button className={`bg-[#0e4c94] px-3 py-2 rounded-md text-white`}>Send</button>
        </div>
    )
}

export default CommentInput