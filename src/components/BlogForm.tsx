import { BsPencil, BsTrash, BsUpload, BsX } from "react-icons/bs"
import { imgages } from "../constants/images"
import { useRef } from "react"
import InputTag from "./InputTag"
import { SetState } from "../utils/types"

const BlogForm = ({ setShowForm }: { setShowForm: SetState<boolean> }) => {
    const imgRef = useRef<HTMLInputElement>(null!)
    const openFile = () => {
        imgRef.current.click()
    }
    return (
        <>
            <div className="w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                <div className="w-[70%] h-[60%] bg-slate-50 p-5 flex gap-5 rounded-md">
                    <div className="w-1/2 h-full relative">
                        <img src={imgages.testImg} alt="" className="w-full h-full rounded-md" />
                        <div className="w-full h-[15%] flex items-center flex-row justify-end absolute bottom-0 p-4">
                            <div className="h-full w-36 bg-white flex items-center justify-evenly gap-3 rounded-md cursor-pointer">
                                <BsTrash size={30} className="hover:fill-[#0e4c94]" />
                                <BsPencil size={30} className="hover:fill-[#0e4c94]" />
                                <BsUpload size={30} className="hover:fill-[#0e4c94]" onClick={openFile} />
                                <input type="file" style={{ display: "none" }} ref={imgRef} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
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
                            <button onClick={() => setShowForm(false)} className=" bg-red-500 py-2 px-4 rounded-md text-white">Close</button>
                            <button className=" bg-[#0e4c94] py-2 px-4 rounded-md text-white active:text-[#0e4c94] active:bg-white active:border active:border-[#0e4c94]">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogForm