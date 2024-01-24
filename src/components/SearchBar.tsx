import {motion} from "framer-motion";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useAppDispatch} from "../hooks";
import {setTag} from "../redux/newsSlice";

const SearchBar = ({showSearch}: {showSearch: boolean}) => {
	const dispatch = useAppDispatch();
	const [serachkey, setSearchKey] = useState("");
	const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			dispatch(setTag(serachkey));
			const id: HTMLElement | null = document.getElementById("article");
			id?.scrollIntoView({behavior: "smooth"});
		}
	};
	return (
		<>
			<motion.div
				className="w-full h-full"
				variants={{
					hidden: {opacity: 0, y: -100},
					visible: {opacity: 1, y: 0},
				}}
				initial="hidden"
				animate={showSearch ? "visible" : "hidden"}>
				<input
					onKeyDown={keyDownHandler}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setSearchKey(e.target.value)
					}
					className="w-full h-full border-2 border-slate-500 outline-none p-3 rounded-md"
					placeholder="Enter topic or tag"
				/>
			</motion.div>
		</>
	);
};

export default SearchBar;
