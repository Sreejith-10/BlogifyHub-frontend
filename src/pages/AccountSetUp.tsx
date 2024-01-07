import { useRef, useState } from "react";
import { BsPencil } from "react-icons/bs";

const AccountSetUp = () => {
    const [img, setImg] = useState("")
    const [imgObj, setImgObj] = useState("")
    const ImgRef = useRef<HTMLInputElement>(null!)
    const showFile = () => {
        ImgRef.current.click()
    }
    return (
        <div className="w-[450px] h-[800px] sm:w-[350px] p-10 md:px-6 gap-8 bg-slate-200 rounded-md shadow-md flex items-center justify-between flex-col">
            <div className="w-[90%] h-[100px] flex flex-col">
                <h1 className="text-3xl font-bold text-slate-800">User Data</h1>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <div className="w-40 h-40 relative">
                    <img src="" alt="" className="w-full h-full bg-white rounded-full" />
                    <input type="file" style={{ display: "none" }} ref={ImgRef} />
                    <div onClick={showFile} className="absolute grid cursor-pointer place-content-center bottom-3 right-3 bg-pink-600 w-8 h-8 rounded-full">
                        <BsPencil size={20} fill={"white"} />
                    </div>
                </div>
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">
                    First Name
                </label>
                <input
                    type="text"
                    placeholder="First name . . ."
                    className="h-10 rounded-md outline-none p-2 border border-slate-400"
                />
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">
                    Last Name
                </label>
                <input
                    type="text"
                    placeholder="Last name . . ."
                    className="h-10 rounded-md outline-none p-2 border border-slate-400"
                />
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">
                    Role
                </label>
                <div className="h-10 w-full relative">
                    <input
                        type="text"
                        placeholder="What do you do . . ."
                        className="h-full w-full rounded-md outline-none p-2 border border-slate-400"
                    />
                </div>
            </div>
            <div className="w-[90%] h-[200px] flex flex-col items-center justify-evenly">
                <button className="w-full py-3 sm:py-2 bg-pink-600 rounded-md text-white shadow-md shadow-pink-500 hover:shadow-pink-800 active:translate-y-1 active:shadow-inner active:shadow-slate-400">
                    Create account
                </button>
            </div>
        </div>
    );
};

export default AccountSetUp;
