import {useEffect, useState} from "react";
import Tile from "./Tile";
import axios from "axios";

const TrendingNav = () => {
	const [trends, setTrends] = useState(["Trending"]);
	const [activeItem, setActiveItem] = useState("Trending");

	useEffect(() => {
		try {
			axios
				.get("/tag/get-tags")
				.then(({data}) => setTrends([...trends, ...data]))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<>
			<div className="w-full h-14 mt-5">
				<div className="w-full sm:w-[90%] overflow-x-auto flex items-center justify-center">
					{trends
						.filter((item, idx) => trends.indexOf(item) === idx)
						.map((item, id) => {
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
