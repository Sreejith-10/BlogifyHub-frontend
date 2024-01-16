import Hero from "./Hero";
import NewsSection from "./NewsSection";
import Tooltip from "./Tooltip";
import TrendingNav from "./TrendingNav";

const Content = () => {
	return (
		<>
			<div className="w-full h-full">
				<Hero />
				<TrendingNav />
				<NewsSection />
			</div>
			<Tooltip />
		</>
	);
};

export default Content;
