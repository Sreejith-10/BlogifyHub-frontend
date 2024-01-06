import News from "../pages/News"
import { SetState } from "../utils/types"
import Hero from "./Hero"
import NewsSection from "./NewsSection"
import TrendingNav from "./TrendingNav"

type ContentType = {
    showNews: boolean,
    setShowNews: SetState<boolean>
}

const Content = ({ showNews, setShowNews }: ContentType) => {
    return (
        <>
            <div className={`w-full h-full ${showNews ? "block" : "hidden"}`}>
                <News showNews={showNews} setShowNews={setShowNews} />
            </div>
            <div className={`w-full h-full ${showNews ? "hidden" : "block"}`}>
                <Hero />
                <TrendingNav />
                <NewsSection setShowNews={setShowNews} />
            </div>
        </>
    )
}

export default Content