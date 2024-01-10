import {useRef, useState} from "react";
import InputTag from "./InputTag";
import {BsPencil, BsTrash, BsUpload} from "react-icons/bs";
import {useNavigate} from "react-router";
import {useAppSelector} from "../hooks";
import axios from "axios";
import toast from "react-hot-toast";

const EditForm = () => {
	const navigate = useNavigate();
	const {singlePost} = useAppSelector((state) => state.news);
	const {userProfile} = useAppSelector((state) => state.user);
	const imgRef = useRef<HTMLInputElement>(null!);
	const [img, setImg] = useState<File | undefined>();
	const [imgObj, setImgObj] = useState<string | undefined>();
	const [tagArray, setTagArray] = useState<string[]>(singlePost?.postTags);
	const [postData, setPostData] = useState({
		postTitle: singlePost.postTitle,
		postDecription: singlePost.postDescription,
	});
	const postId = singlePost._id;
	const openFile = () => {
		imgRef.current.click();
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
	const updatePost = async () => {
		try {
			const {postTitle, postDecription} = postData;
			// if (!postTitle && !postDecription && tagArray.length === 0)
			// return toast.error("Post cannot be empty");

			// if (tagArray.length === 0) return toast.error("Provide a tag");

			// if (!img) return toast.error("Provide an image");

			const formData = new FormData();

			// if (postTitle !== singlePost.postTitle)
			formData.append("postTitle", postTitle);

			// if (postDecription !== singlePost.postDescription)
			formData.append("postDescription", postDecription);

			if (img) {
				formData.append("postImage", img, img.name);
			} else {
				formData.append("postImage", singlePost.postImage);
			}
			if (tagArray)
				tagArray.forEach((tag, index) => {
					formData.append(`tag[${index}]`, tag);
				});
			if (postId) formData.append("postId", postId);

			if (userProfile?.userId) formData.append("userId", userProfile?.userId);

			await axios
				.patch("/post/update-post", formData, {
					headers: {"Content-Type": "application/json"},
				})
				.then(({data}) => {
					return toast.success(data);
				});
			navigate(-1);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="w-full h-[100%] flex flex-col items-center justify-center z-[99]">
			<div className="mt-10 mb-10 sm:my-0 md-my-1 font-bold text-2xl">
				Edit post
			</div>
			<div className="w-full sm:w-[95%] md:w-[90%] lg:h-auto h-[60%] bg-slate-50 border border-slate-400 lg:mt-10 lg:mb-10 p-5 flex md:flex-col lg:flex-col gap-5 rounded-md">
				<div className="w-1/2 lg:w-full h-full relative">
					{imgObj ? (
						<img src={imgObj as string} className="w-full h-full rounded-md" />
					) : (
						<img
							src={`http://localhost:3001/Images/${singlePost.postImage}`}
							alt=""
							className="w-full h-full rounded-md"
						/>
					)}
					<div className="w-full h-20 flex items-center flex-row justify-end absolute bottom-0 p-4 z-[99]">
						<div className="h-full w-36 bg-white border-2 border-[#0e4c94] flex items-center justify-evenly gap-3 rounded-md cursor-pointer">
							<BsTrash
								onClick={() => setImgObj("")}
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
					<div className="w-[100%] h-[100px] flex flex-col">
						<label htmlFor="" className="text-slate-700">
							Title
						</label>
						<input
							value={postData.postTitle}
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
							value={postData.postDecription}
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
							Cancel
						</button>
						<button
							onClick={updatePost}
							className=" bg-[#0e4c94] py-2 px-4 rounded-md text-white active:text-[#0e4c94] active:bg-white active:border active:border-[#0e4c94]">
							Update
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditForm;