import {colors} from "../constants/colors";
import Card from "./Card";
import {useAppSelector} from "../hooks";
import {useEffect, useState} from "react";
import axios from "axios";

const NewsSection = () => {
	const {tag} = useAppSelector((state) => state.news);
	const {posts} = useAppSelector((state) => state.news);
	const [trendTags, setTrendTags] = useState([]);
	useEffect(() => {
		try {
			axios
				.get("/tag/get-trending-tags")
				.then(({data}) => setTrendTags(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<>
			<div
				className="w-full h-full mt-6 flex items-center justify-center flex-col"
				id="article">
				<div className={`text-[${colors.primary}] text-4xl font-medium`}>
					{tag}
				</div>
				<div className="w-full h-auto mt-8 mb-4 flex flex-wrap gap-3 sm:justify-center lg:gap-2 items-center justify-center">
					{tag === "Trending"
						? posts
								?.filter((item) => {
									return trendTags.some((i: any) => {
										return item.postTags.includes(i._id);
									});
								})
								.map((item, idx) => <Card edit={false} item={item} key={idx} />)
						: posts
								?.filter((item) => {
									return item.postTags.includes(tag);
								})
								.map((item, idx) => (
									<Card edit={false} item={item} key={idx} />
								))}
				</div>
			</div>
		</>
	);
};

export default NewsSection;
