import axios from "axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsPencil } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

type FormData = {
    fname: string;
    lname: string;
    profession: string;
    age: string;
};

const AccountSetUp = () => {
    const navigate = useNavigate()
    const { user } = useAppSelector((state) => state.auth);
    const [img, setImg] = useState<File | undefined>();
    const [imgObj, setImgObj] = useState<string | undefined>();
    const ImgRef = useRef<HTMLInputElement>(null!);
    const [datas, setDatas] = useState<FormData>({
        fname: "",
        lname: "",
        profession: "",
        age: "",
    });
    const showFile = () => {
        ImgRef.current.click();
    };
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.onload = () => {
                setImgObj(reader.result as string);
            };
            reader.readAsDataURL(file);
            setImg(file);
        }
    };
    const setUpAccount = async () => {
        const formData = new FormData();
        const { fname, lname, profession, age } = datas;
        if (!fname && !lname && !profession)
            return toast.error("All fields are required");
        if (parseInt(age) <= 0 || parseInt(age) > 1001)
            return toast.error("Provide correct age");
        formData.append("fname", datas.fname);
        formData.append("lname", datas.lname);
        formData.append("profession", datas.profession);
        formData.append("age", datas.age);
        if (user) {
            const userid = user.id
            formData.append("userId", userid);
        }
        if (img) {
            formData.append("img", img, img.name);
        }
        try {
            const { data } = await axios.post("/user/add", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (data) {
                toast.success(data)
                return navigate("/create")
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="w-[450px] h-[800px] sm:w-[350px] p-10 md:px-6 gap-8 bg-slate-200 rounded-md shadow-md flex items-center justify-between flex-col">
            <div className="w-[90%] h-[100px] flex flex-row items-center justify-between">
                <h1 className="text-3xl font-bold text-slate-800">User Data</h1>
                <Link to={"/"} className="hover:text-pink-600">
                    Skip
                </Link>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <div className="w-40 h-40 relative">
                    <img
                        src={imgObj}
                        alt=""
                        className="w-full h-full bg-white rounded-full"
                    />
                    <input
                        type="file"
                        style={{ display: "none" }}
                        ref={ImgRef}
                        onChange={changeHandler}
                    />
                    <div
                        onClick={showFile}
                        className="absolute grid cursor-pointer place-content-center bottom-3 right-3 bg-pink-600 w-8 h-8 rounded-full">
                        <BsPencil size={20} fill={"white"} />
                    </div>
                </div>
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">
                    First Name
                </label>
                <input
                    onChange={(e) =>
                        setDatas((prev) => ({ ...prev, fname: e.target.value }))
                    }
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
                    onChange={(e) =>
                        setDatas((prev) => ({ ...prev, lname: e.target.value }))
                    }
                    type="text"
                    placeholder="Last name . . ."
                    className="h-10 rounded-md outline-none p-2 border border-slate-400"
                />
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">
                    Profession
                </label>
                <div className="h-10 w-full relative">
                    <input
                        onChange={(e) =>
                            setDatas((prev) => ({ ...prev, profession: e.target.value }))
                        }
                        type="text"
                        placeholder="What do you do . . ."
                        className="h-full w-full rounded-md outline-none p-2 border border-slate-400"
                    />
                </div>
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">
                    Age
                </label>
                <div className="h-10 w-full relative">
                    <input
                        onChange={(e) =>
                            setDatas((prev) => ({ ...prev, age: e.target.value }))
                        }
                        type="number"
                        placeholder="Age"
                        className="h-full w-full rounded-md outline-none p-2 border border-slate-400"
                    />
                </div>
            </div>
            <div className="w-[90%] h-[200px] flex flex-col items-center justify-evenly">
                <button
                    onClick={setUpAccount}
                    className="w-full py-3 sm:py-2 bg-pink-600 rounded-md text-white shadow-md shadow-pink-500 hover:shadow-pink-800 active:translate-y-1 active:shadow-inner active:shadow-slate-400">
                    Create account
                </button>
            </div>
        </div>
    );
};

export default AccountSetUp;
