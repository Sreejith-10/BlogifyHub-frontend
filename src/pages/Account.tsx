import { useState } from "react";
import { imgages } from "../constants/images";

const Account = () => {
    const [disable, setDisable] = useState(true);
    return (
        <>
            <div className="w-full h-full mt-10 flex items-center justify-center flex-col z-50">
                <div className="w-[80%] h-auto mb-4 text-4xl">Profile</div>
                <div className="w-[80%] sm:w-full h-auto flex flex-col">
                    <div className="w-full h-1/2 flex items-center gap-10">
                        <div className="w-60 h-60">
                            <img
                                src={imgages.test2}
                                alt=""
                                className="w-full h-full shadow-md rounded-full"
                            />
                        </div>
                        <div>
                            <h1 className="font-bold text-2xl">Son Goku</h1>
                            <h1 className="font-medium text-xl">Front end developer</h1>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex sm:flex-col sm:items-center sm:justify-center sm:gap-5 sm:mt-5">
                        <div className="w-1/2 sm:w-full h-full flex flex-col gap-5 items-center justify-center z-50">
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="">First Name</label>
                                <input
                                    type="text"
                                    className="w-[80%] sm:w-full h-10 rounded-md bg-slate-200 border border-slate-400 p-2 outline-none disabled:bg-white"
                                    disabled={disable}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="">Email</label>
                                <input
                                    type="text"
                                    className="w-[80%] sm:w-full h-10 rounded-md bg-slate-200 border border-slate-400 p-2 outline-none disabled:bg-white"
                                    disabled={disable}
                                />
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-full h-full flex flex-col items-center justify-center gap-5 z-50">
                            <div className="w-full flex flex-col gap-3 items-start justify-center">
                                <label htmlFor="">Last Name</label>
                                <input
                                    type="text"
                                    className="w-[80%] sm:w-full h-10 rounded-md bg-slate-200 border border-slate-400 p-2 outline-none disabled:bg-white"
                                    disabled={disable}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="">Role</label>
                                <input
                                    type="text"
                                    className="w-[80%] sm:w-full h-10 rounded-md bg-slate-200 border border-slate-400 p-2 outline-none disabled:bg-white"
                                    disabled={disable}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-10 mt-10">
                        <button className="bg-orange-500 px-2 py-1 rounded-md text-white shadow-md">
                            Save changes
                        </button>
                        <button onClick={() => setDisable(!disable)} className="bg-green-500 px-2 py-1 rounded-md text-white shadow-md">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
