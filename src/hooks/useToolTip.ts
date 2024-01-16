import {useState} from "react";

export const useToolTip = () => {
	const [showToolTip, setShowToolTip] = useState(false);

	return [showToolTip, setShowToolTip];
};
