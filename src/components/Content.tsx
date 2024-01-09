import Hero from "./Hero";
import NewsSection from "./NewsSection";
import TrendingNav from "./TrendingNav";

const Content = () => {
	return (
		<>
			{/* <div className={`w-full h-full ${showNews ? "block" : "hidden"}`}>
                <News showNews={showNews} setShowNews={setShowNews} />
            </div> */}
			<div className="w-full h-full">
				<Hero />
				<TrendingNav />
				<NewsSection  />
			</div>
		</>
	);
};

export default Content;
