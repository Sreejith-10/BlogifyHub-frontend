import {useContext, useState} from "react";
import Cropper from "react-easy-crop";
import {BiCrop, BiX} from "react-icons/bi";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setImageRef, setOpenCrop} from "../../redux/cropSlice";
import {FaUndo} from "react-icons/fa";
import "../../App.css";
import getCroppedImg from "./cropimage.js";
import {ContextType, CropImageContext} from "../../context/CropContext.js";

const CropperEasy = () => {
	const {setCroppedImage} = useContext(CropImageContext) as ContextType;
	const dispatch = useAppDispatch();
	const {imageRef} = useAppSelector((state) => state.crop);
	const [crop, setCrop] = useState({x: 0, y: 0});
	const [zoom, setZoom] = useState(1);
	const [rotate, setRotate] = useState(0);
	const [cropAreaPixel, setCropAreaPixel] = useState(null);

	const cropComplete = (cropAreaPixel: any) => {
		setCropAreaPixel(cropAreaPixel);
	};
	// const zoomPercent = (value: any) => {
	// 	return `${Math.round(value + 100)} %`;
	// };

	const reset = () => {
		setZoom(0);
		setRotate(0);
	};

	console.log(cropAreaPixel);

	const cropImage = async () => {
		try {
			const {file, url}: any = await getCroppedImg(
				imageRef,
				cropAreaPixel,
				rotate
			);
			if (file && url) {
				setCroppedImage({file, url});
				dispatch(setOpenCrop(false));
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="w-full h-full flex items-center flex-col justify-center">
				<div className="w-[60%] h-[75%] flex items-center justify-center flex-col">
					<div className="w-full h-16 flex items-center justify-between p-2 text-xl font-semibold bg-white">
						Crop Image
						<BiX
							size={50}
							onClick={() => {
								dispatch(setImageRef(""));
								dispatch(setOpenCrop(false));
							}}
						/>
					</div>
					<div className="w-full h-[60%] relative">
						<Cropper
							image={imageRef}
							crop={crop}
							zoom={zoom}
							rotation={rotate}
							aspect={4/3}
							onZoomChange={setZoom}
							onRotationChange={setRotate}
							onCropChange={setCrop}
							onCropComplete={cropComplete}
						/>
					</div>
					<div className="w-full h-32 bg-white">
						<div className="w-full h-1/2 flex items-center justify-center gap-5">
							<label htmlFor="">Zoom</label>
							<input
								className="input-tag"
								type="range"
								min={1}
								max={3}
								step={0.1}
								value={zoom}
								onChange={(e) => setZoom(parseFloat(e.target.value))}
							/>
							<label htmlFor="">Rotate</label>
							<input
								type="range"
								min={0}
								max={360}
								step={1}
								value={rotate}
								onChange={(e) => setRotate(parseInt(e.target.value))}
							/>
						</div>
						<div className="w-full h-1/2 flex items-center justify-center gap-5">
							<button
								onClick={reset}
								className="w-auto h-10 flex items-center justify-center gap-1 bg-[#0e4c94] text-white px-3 rounded-md transition-transform hover:scale-[1.2] active:scale-90">
								<FaUndo size={20} fill={"white"} />
								Undo
							</button>
							<button
								onClick={cropImage}
								className="w-auto h-10 flex items-center justify-center gap-1 bg-[#0e4c94] text-white px-3 rounded-md transition-transform hover:scale-[1.2] active:scale-90">
								<BiCrop size={30} fill={"white"} />
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CropperEasy;
