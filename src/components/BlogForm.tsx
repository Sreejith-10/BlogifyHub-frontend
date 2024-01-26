import {BsPencil, BsTrash, BsUpload} from "react-icons/bs";
import {imgages} from "../constants/images";
import {useContext, useEffect, useRef, useState} from "react";
import InputTag from "./InputTag";
import toast from "react-hot-toast";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../hooks";
import {useNavigate} from "react-router";
import {setImageRef, setOpenCrop} from "../redux/cropSlice";
import {ContextType, CropImageContext} from "../context/CropContext";

const BlogForm = () => {
	const {croppedImage, setCroppedImage} = useContext(
		CropImageContext
	) as ContextType;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {userProfile} = useAppSelector((state) => state.user);
	const imgRef = useRef<HTMLInputElement>(null!);
	const [tagArray, setTagArray] = useState<string[]>([]);
	const [postData, setPostData] = useState({
		postTitle: "",
		postDecription: "",
	});

	const [img, setImg] = useState<File | undefined>();
	const [imgObj, setImgObj] = useState<string | undefined>();

	const openFile = () => {
		imgRef.current.click();
	};
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setImg(file);
			setImgObj(URL.createObjectURL(file));
		}
	};

	useEffect(() => {
		if (imgObj) {
			dispatch(setOpenCrop(true));
			dispatch(setImageRef(imgObj));
		}
	}, [imgObj]);

	const removeImg = () => {
		setImgObj("");
		setCroppedImage(undefined);
		dispatch(setOpenCrop(false));
		dispatch(setImageRef(""));
	};

	const addPost = async () => {
		try {
			const {postTitle, postDecription} = postData;
			if (!postTitle && !postDecription && !img && tagArray.length === 0)
				return toast.error("Post cannot be empty");

			if (tagArray.length === 0) return toast.error("Provide a tag");

			if (!img) return toast.error("Provide an image");

			const formData = new FormData();

			formData.append("postTitle", postTitle);
			formData.append("postDescription", postDecription);

			if (userProfile?.userId) formData.append("userId", userProfile?.userId);

			if (croppedImage)
				formData.append("postImage", croppedImage.file, croppedImage.file.name);

			tagArray.forEach((tag, index) => {
				formData.append(`tag[${index}]`, tag);
			});

			const {data} = await axios.post("/post/add-post", formData, {
				headers: {"Content-Type": "multipart/form-data"},
			});

			if (data.error) return toast.error(data.error);

			setCroppedImage(undefined);
			dispatch(setImageRef(""));
			navigate("/");
			return toast.success(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<div className="w-full h-[100%] flex flex-col items-center justify-center z-[99] sm:mt-10">
				<div className="mt-10 mb-10 sm:my-0 md-my-1 font-bold text-2xl">
					Create a post
				</div>
				<div className="w-full sm:w-[95%] md:w-[90%] lg:h-auto h-[60%] bg-slate-50 border border-slate-400 lg:mt-10 lg:mb-10 p-5 flex md:flex-col lg:flex-col gap-5 rounded-md">
					<div className="w-1/2 lg:w-full h-full relative">
						{imgObj ? (
							<img
								src={croppedImage?.url ? croppedImage?.url : imgObj}
								className="w-full h-full rounded-md"
							/>
						) : (
							<img
								src={imgages.DefaultImg2}
								alt=""
								className="w-full h-full rounded-md"
							/>
						)}
						<div className="w-full h-20 flex items-center flex-row justify-end absolute bottom-0 p-4 z-[50] sm:z-0">
							<div className="h-full w-36 bg-white border-2 border-[#0e4c94] flex items-center justify-evenly gap-3 rounded-md cursor-pointer">
								<BsTrash
									onClick={removeImg}
									size={30}
									className="hover:fill-[#0e4c94]"
								/>
								<BsPencil size={30} className="hover:fill-[#0e4c94]" />
								<BsUpload
									size={30}
									className="hover:fill-[#0e4c94]"
									onClick={openFile}
								/>
								<input
									onChange={changeHandler}
									type="file"
									style={{display: "none"}}
									ref={imgRef}
								/>
							</div>
						</div>
					</div>
					<div className="w-1/2 lg:w-full h-full">
						<div className="w-[100%] h-[100px] sm:w-auto sm:h-auto flex flex-col sm:mb-5">
							<label htmlFor="" className="text-slate-700">
								Title
							</label>
							<input
								onChange={(e) =>
									setPostData((prev) => ({...prev, postTitle: e.target.value}))
								}
								placeholder="Title"
								className="h-10 rounded-md outline-none p-2 border border-slate-400"
							/>
						</div>
						<div className="w-[100%] h-[200px] flex flex-col">
							<InputTag tagArray={tagArray} setTagArray={setTagArray} />
						</div>
						<div className="w-[100%] h-[180px] flex flex-col">
							<label htmlFor="" className="text-slate-700">
								Descrption
							</label>
							<textarea
								onChange={(e) =>
									setPostData((prev) => ({
										...prev,
										postDecription: e.target.value,
									}))
								}
								placeholder="Message"
								className="h-full rounded-md outline-none p-2 border border-slate-400"
							/>
						</div>
						<div className="w-[100%] h-[50px] flex items-end justify-between flex-row">
							<button
								onClick={() => navigate(-1)}
								className=" bg-red-500 py-2 px-4 rounded-md text-white">
								Close
							</button>
							<button
								onClick={addPost}
								className=" bg-[#0e4c94] py-2 px-4 rounded-md text-white active:text-[#0e4c94] active:bg-white active:border active:border-[#0e4c94]">
								Post
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogForm;
