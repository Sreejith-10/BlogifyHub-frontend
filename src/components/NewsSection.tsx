import {colors} from "../constants/colors";
import Card from "./Card";
import {useAppSelector} from "../hooks";

const NewsSection = () => {
	const {tag} = useAppSelector((state) => state.news);
	const {posts} = useAppSelector((state) => state.news);
	console.log(tag);
	return (
		<>
			<div
				className="w-full h-full mt-6 flex items-center justify-center flex-col"
				id="article">
				<div className={`text-[${colors.primary}] text-4xl font-medium`}>
					{tag}
				</div>
				<div className="w-full h-auto mt-8 mb-4 flex flex-wrap gap-4 sm:justify-center xl:gap-10">
					{posts?.map((item, idx) => (
						<Card edit={false} item={item} key={idx} />
					))}
				</div>
			</div>
		</>
	);
};

export default NewsSection;
