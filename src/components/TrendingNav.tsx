import {useState} from "react";
import Tile from "./Tile";

const TrendingNav = () => {
	const trends = [
		"Trending",
		"Webdev",
		"Tesla",
		"Aws",
		"Sports",
		"Javascript",
		"Webdev",
		"Tesla",
		"Aws",
		"Sports",
	];
	const [activeItem, setActiveItem] = useState("Trending");
	return (
		<>
			<div className="w-full h-14 mt-5">
				<div className="w-full sm:w-[90%] overflow-x-auto flex items-center justify-center">
					{trends.map((item, id) => {
						return (
							<Tile
								trend={item}
								activeItem={activeItem}
								setActiveItem={setActiveItem}
								key={id}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default TrendingNav;
