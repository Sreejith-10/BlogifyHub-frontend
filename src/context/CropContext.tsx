import {ReactNode, createContext, useState} from "react";
import {CropType, SetState} from "../utils/types";

export type ContextType = {
	croppedImage: CropType | undefined;
	setCroppedImage: SetState<CropType | undefined>;
};

export const CropImageContext = createContext<ContextType | undefined>(
	undefined
);

const CropContext = ({children}: {children: ReactNode}) => {
	const [croppedImage, setCroppedImage] = useState<CropType>();
	return (
		<CropImageContext.Provider value={{croppedImage, setCroppedImage}}>
			{children}
		</CropImageContext.Provider>
	);
};

export default CropContext;
