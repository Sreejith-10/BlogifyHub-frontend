import {colors} from "../constants/colors";
import {useAppDispatch} from "../hooks";
import {setTag} from "../redux/newsSlice";
import {SetState} from "../utils/types";

type TileProps = {
	trend: string;
	activeItem?: string;
	setActiveItem?: SetState<string>;
};

const Tile = ({trend, activeItem, setActiveItem}: TileProps) => {
	const dispatch = useAppDispatch();
	const tileClick = () => {
		dispatch(setTag(trend));
		setActiveItem && setActiveItem(trend);
	};
	return (
		<label
			onClick={tileClick}
			className={`w-auto h-auto px-2 py-1 m-5 rounded-md shadow-md text-slate-700 cursor-pointer  hover:bg-white hover:shadow-slate-600 hover:shadow-sm hover:text-slate-500 ${
				activeItem === trend
					? `bg-[${colors.primary}] text-white`
					: "bg-slate-200"
			}`}>
			{trend}
		</label>
	);
};

export default Tile;
