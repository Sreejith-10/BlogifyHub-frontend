import { BsPencil, BsTrash, BsUpload, BsX } from "react-icons/bs"
import { imgages } from "../constants/images"
import { useRef } from "react"
import InputTag from "./InputTag"

const BlogForm = () => {
    const imgRef = useRef<HTMLInputElement>(null!)
    const openFile = () => {
        imgRef.current.click()
    }
    return (
        <>
            <div className="w-full h-[100%] flex flex-col items-center justify-center">
                <div className="mt-10 mb-10 sm:my-0 md-my-1 font-bold text-2xl">
                    Create a post
                </div>
                <div className="w-full sm:w-[95%] md:w-[90%] lg:h-auto h-[60%] bg-slate-50 border border-slate-400 lg:mt-10 lg:mb-10 p-5 flex md:flex-col lg:flex-col gap-5 rounded-md">
                    <div className="w-1/2 lg:w-full h-full relative">
                        <img src={imgages.testImg} alt="" className="w-full h-full rounded-md" />
                        <div className="w-full h-[15%] lg:h-[20%] sm:h-[30%] flex items-center flex-row justify-end absolute bottom-0 p-4">
                            <div className="h-full w-36 bg-white flex items-center justify-evenly gap-3 rounded-md cursor-pointer">
                                <BsTrash size={30} className="hover:fill-[#0e4c94]" />
                                <BsPencil size={30} className="hover:fill-[#0e4c94]" />
                                <BsUpload size={30} className="hover:fill-[#0e4c94]" onClick={openFile} />
                                <input type="file" style={{ display: "none" }} ref={imgRef} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-full h-full">
                        <div className="w-[100%] h-[100px] flex flex-col">
                            <label htmlFor="" className="text-slate-700">Title</label>
                            <input
                                placeholder="Title"
                                className="h-10 rounded-md outline-none p-2 border border-slate-400"
                            />
                        </div>
                        <div className="w-[100%] h-[200px] flex flex-col">
                            <InputTag />
                        </div>
                        <div className="w-[100%] h-[180px] flex flex-col">
                            <label htmlFor="" className="text-slate-700">Descrption</label>
                            <textarea
                                placeholder="Message"
                                className="h-full rounded-md outline-none p-2 border border-slate-400"
                            />
                        </div>
                        <div className="w-[100%] h-[50px] flex items-end justify-between flex-row">
                            <button className=" bg-red-500 py-2 px-4 rounded-md text-white">Close</button>
                            <button className=" bg-[#0e4c94] py-2 px-4 rounded-md text-white active:text-[#0e4c94] active:bg-white active:border active:border-[#0e4c94]">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogForm