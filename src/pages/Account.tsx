import { imgages } from "../constants/images"

const Account = () => {
    return (
        <>
            <div className="w-full h-full mt-10 flex items-center justify-center flex-col">
                <div className="w-[80%] h-auto mb-4 text-4xl">
                    Profile
                </div>
                <div className="w-[80%] h-auto flex flex-col">
                    <div className="w-full h-1/2 flex items-center gap-10">
                        <div className="w-60 h-60">
                            <img src={imgages.test2} alt="" className="w-full h-full shadow-md rounded-full" />
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl">Son Goku</h1>
                            <h1 className="font-medium text-xl">Front end developer</h1>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-row items-center justify-center">
                        <div className="w-1/2 h-full flex flex-col gap-5">
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="">First Name</label>
                                <input type="text" className="w-[80%] h-10 rounded-md bg-slate-200 border border-slate-400"/>
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="">Email</label>
                                <input type="text" className="w-[80%] h-10 rounded-md bg-slate-200 border border-slate-400" />
                            </div>
                        </div>
                        <div className="w-1/2 h-full flex flex-col gap-5">
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="">Last Name</label>
                                <input type="text" className="w-[80%] h-10 rounded-md bg-slate-200 border border-slate-400" />
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="">Role</label>
                                <input type="text" className="w-[80%] h-10 rounded-md bg-slate-200 border border-slate-400" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button>Save changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account