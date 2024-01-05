import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const ClickHandler = (bool: boolean) => {
        setShowPass(bool);
    };
    return (
        <>
            <div className="w-[450px] h-[600px] sm:w-[350px] p-10 md:px-6 bg-slate-200 rounded-md shadow-md flex items-center justify-between flex-col">
                <div className="w-[90%] h-[100px] flex flex-col">
                    <h1 className="text-3xl font-bold text-slate-800">New User</h1>
                </div>
                <div className="w-[90%] h-[100px] flex flex-col">
                    <label htmlFor="" className="text-slate-700">Name</label>
                    <input
                        type="text"
                        className="h-10 rounded-md outline-none p-2 border border-slate-400"
                    />
                </div>
                <div className="w-[90%] h-[100px] flex flex-col">
                    <label htmlFor="" className="text-slate-700">Email</label>
                    <input
                        type="email"
                        className="h-10 rounded-md outline-none p-2 border border-slate-400"
                    />
                </div>
                <div className="w-[90%] h-[100px] flex flex-col">
                    <label htmlFor="" className="text-slate-700">Password</label>
                    <div className="h-10 w-full relative">
                        <input
                            type={showPass ? "password" : "text"}
                            className="h-full w-full rounded-md outline-none p-2 border border-slate-400"
                        />
                        <div className="absolute z-50 flex right-3 top-3 cursor-pointer">
                            {showPass ? (
                                <span onClick={() => ClickHandler(false)}>
                                    <FaEyeSlash />
                                </span>
                            ) : (
                                <span onClick={() => ClickHandler(true)}>
                                    <FaEye />
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-[90%] h-[200px] flex flex-col items-center justify-evenly">
                    <button className="w-full py-3 sm:py-2 bg-pink-600 rounded-md text-white shadow-md shadow-pink-500 hover:shadow-pink-800 active:translate-y-1 active:shadow-inner active:shadow-slate-400">
                        Sign up
                    </button>
                    <span className="bg-slate-500 px-2 py-2 text-white rounded-full flex items-center justify-center relative chain">
                        OR
                    </span>
                    <span className="text-slate-600 font-light">
                        Aleready have an account?
                        <Link to={"/login"} className="font-medium hover:text-pink-600">LOGIN</Link>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Register;
