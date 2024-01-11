import {useState} from "react";
import {useAppSelector} from "../hooks";

const Account = () => {
	const [disable, setDisable] = useState(true);
	const {userProfile} = useAppSelector((state) => state.user);
	const [userRef, setUserRef] = useState({
		fname: userProfile?.fname,
		lname: userProfile?.lname,
		profession: userProfile?.profession,
		age: userProfile?.age,
		profileImg: userProfile?.profileImg,
		userId: userProfile?.userId,
	});
	return (
		<>
			<div className="w-full h-[80vh] flex items-center justify-center">
				<div className="w-full h-fit sm:my-auto rounded-md shadow-md flex items-center justify-center flex-col z-50 sm:bg-none bg-slate-100 border border-slate-300 p-5">
					<div className="w-[80%] h-auto mb-4 text-4xl">Profile</div>
					<div className="w-[80%] sm:w-full h-auto flex flex-col">
						<div className="w-full h-1/2 flex items-center gap-10">
							<div className="w-60 h-60">
								<img
									src={`http://localhost:3001/Images/${userRef?.profileImg}`}
									alt=""
									className="w-full h-full shadow-md rounded-full"
								/>
							</div>
							<div>
								<h1 className="font-bold text-2xl">
									{userProfile?.fname + " " + userProfile?.lname}
								</h1>
								<h1 className="font-medium text-xl">
									{userProfile?.profession}
								</h1>
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
										value={disable ? userProfile?.lname : userRef?.lname}
										type="text"
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
							{disable ? (
								<button
									onClick={() => setDisable(false)}
									className="bg-green-500 px-2 py-1 rounded-md text-white shadow-md">
									Update
								</button>
							) : (
								<button
									onClick={() => setDisable(true)}
									className="bg-red-500 px-2 py-1 rounded-md text-white shadow-md">
									Cancel
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Account;
