import {useEffect, useId, useRef, useState} from "react";
import {useAppSelector} from "../hooks";
import {BsPencil, BsPersonFill} from "react-icons/bs";
import toast from "react-hot-toast";
import axios from "axios";
import {BiSolidLike} from "react-icons/bi";
import {PiSignpostFill} from "react-icons/pi";

const Account = () => {
	const fileRef = useRef<HTMLInputElement>(null);
	const [disable, setDisable] = useState(true);
	const {userProfile} = useAppSelector((state) => state.user);
	const [postCount, setPostCount] = useState(0);
	const [likeCount, setLikeCount] = useState(0);
	const [userRef, setUserRef] = useState({
		fname: userProfile?.fname,
		lname: userProfile?.lname,
		profession: userProfile?.profession,
		age: userProfile?.age,
		profileImg: userProfile?.profileImg,
		userId: userProfile?.userId,
	});
	const [img, setImg] = useState<File | undefined>();
	const [imgObj, setImgObj] = useState<string | undefined>();

	const cancel = () => {
		setUserRef({
			fname: userProfile?.fname,
			lname: userProfile?.lname,
			profession: userProfile?.profession,
			age: userProfile?.age,
			profileImg: userProfile?.profileImg,
			userId: userProfile?.userId,
		});
		setDisable(true);
		setImg(undefined);
		setImgObj(undefined);
	};

	const openFile = () => {
		fileRef.current?.click();
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

	const updateHandler = async () => {
		try {
			const {fname, lname, age, profession} = userRef;
			// if (
			// 	fname === userProfile?.fname &&
			// 	lname === userProfile?.lname &&
			// 	age === userProfile?.age &&
			// 	profession === userProfile?.profession
			// )
			// 	return toast.error("Nothin to update");
			const formData = new FormData();
			if (fname && lname && age && profession) {
				formData.append("fname", fname);
				formData.append("lname", lname);
				formData.append("age", age.toString());
				formData.append("profession", profession);
			}
			if (userProfile?.userId) {
				formData.append("userId", userProfile.userId);
			}
			const {data} = await axios.patch("/user/update-user", formData, {
				headers: {"Content-Type": "mulitpart/form-data"},
			});
			if (data) {
				cancel();
				return toast.success(data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		try {
			axios
				.get(`/post/get-post-count/${userProfile?.userId}`)
				.then(({data}) => setPostCount(data))
				.catch((err) => console.log(err));
			axios
				.get(`/post/get-like-count/${userProfile?.userId}`)
				.then(({data}) => setLikeCount(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<>
			<div className="w-full h-[80vh] flex flex-col items-center justify-center">
				<div className="w-[80%] h-auto mb-4 text-4xl">Profile</div>
				<div className="w-full h-fit sm:my-auto rounded-md shadow-md flex items-center justify-center flex-col z-50 sm:bg-none bg-slate-100 border border-slate-300 p-5 ">
					<div className="w-[80%] sm:w-full h-auto flex flex-col">
						<div className="w-full h-1/2 flex items-center gap-10">
							<div className="w-60 h-60 mb-3 ">
								<div className="w-full h-full relative">
									<img
										src={
											imgObj
												? imgObj
												: `http://localhost:3001/Images/${userRef?.profileImg}`
										}
										alt=""
										className="w-full h-full shadow-md rounded-full"
									/>
									<div
										className={`${
											disable ? "hidden" : "visible"
										} absolute right-[5%] bottom-[10%] bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}>
										<BsPencil size={25} onClick={openFile} fill="white" />
									</div>
									<input
										ref={fileRef}
										onChange={changeHandler}
										type="file"
										className="hidden"
									/>
								</div>
							</div>
							<div className="w-auto h-auto flex flex-col items-center gap-5">
								<div className="w-full h-1/2">
									<h1 className="font-bold text-2xl">
										{userProfile?.fname + " " + userProfile?.lname}
									</h1>
									<h1 className="font-medium text-xl">
										{userProfile?.profession}
									</h1>
								</div>
								<div className="w-full h-1/2 flex items-center justify-between">
									<div className="flex flex-col items-center justify-center gap-2">
										<BiSolidLike size={30} className="fill-[#0e4c94]" />
										<h1 className="font-bold text-xl">{likeCount}</h1>
									</div>
									<div className="flex flex-col items-center justify-center gap-2">
										<BsPersonFill size={30} className="fill-[#0e4c94]" />
										<h1 className="font-bold text-xl">
											{userProfile?.followers?.length}
										</h1>
									</div>
									<div className="flex flex-col items-center justify-center gap-2">
										<PiSignpostFill size={30} className="fill-[#0e4c94]" />
										<h1 className="font-bold text-xl">{postCount}</h1>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full h-1/2 flex sm:flex-col sm:items-center sm:justify-center sm:gap-5 sm:mt-5">
							<div className="w-1/2 sm:w-full h-full flex flex-col gap-5 items-center justify-center z-50">
								<div className="w-full flex flex-col gap-3">
									<label htmlFor="">First Name</label>
									<input
										value={disable ? userProfile?.fname : userRef?.fname}
										onChange={(e) =>
											setUserRef((prev) => ({...prev, fname: e.target.value}))
										}
										type="text"
										className="w-[80%] sm:w-full h-10 rounded-md bg-slate-200 border border-slate-400 p-2 outline-none disabled:bg-white"
										disabled={disable}
									/>
								</div>
								<div className="w-full flex flex-col gap-3">
									<label htmlFor="">Age</label>
									<input
										value={disable ? userProfile?.age : userRef?.age}
										// onChange={(e) =>
										// 	setUserRef((prev) => ({
										// 		...prev,
										// 		age: e.target.value.toString(),
										// 	}))
										// }
										type="number"
										className="w-[80%] sm:w-full h-10 rounded-md bg-slate-200 border border-slate-400 p-2 outline-none disabled:bg-white"
										disabled={disable}
									/>
								</div>
							</div>
							<div className="w-1/2 sm:w-full h-full flex flex-col items-center justify-center gap-5 z-50">
								<div className="w-full flex flex-col gap-3 items-start justify-center">
									<label htmlFor="">Last Name</label>
									<input
										value={disable ? userProfile?.lname : userRef?.lname}
										type="text"
										onChange={(e) =>
											setUserRef((prev) => ({...prev, lname: e.target.value}))
										}
										className="w-[80%] sm:w-full h-10 rounded-md bg-slate-200 border border-slate-400 p-2 outline-none disabled:bg-white"
										disabled={disable}
									/>
								</div>
								<div className="w-full flex flex-col gap-3">
									<label htmlFor="">Role</label>
									<input
										value={
											disable ? userProfile?.profession : userRef?.profession
										}
										type="text"
										onChange={(e) =>
											setUserRef((prev) => ({
												...prev,
												profession: e.target.value,
											}))
										}
										className="w-[80%] sm:w-full h-10 rounded-md bg-slate-200 border border-slate-400 p-2 outline-none disabled:bg-white"
										disabled={disable}
									/>
								</div>
							</div>
						</div>
						<div className="w-full flex gap-10 mt-10">
							{disable ? (
								<button
									onClick={() => setDisable(false)}
									className="bg-green-500 px-2 py-1 rounded-md text-white shadow-md">
									Edit
								</button>
							) : (
								<button
									onClick={cancel}
									className="bg-red-500 px-2 py-1 rounded-md text-white shadow-md">
									Cancel
								</button>
							)}
							<button
								onClick={updateHandler}
								className={`${
									disable ? "invisible" : "visible"
								} bg-orange-500 px-2 py-1 rounded-md text-white shadow-md`}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Account;
