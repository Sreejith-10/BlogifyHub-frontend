import { useState } from "react"
import HeaderNav from "../components/HeaderNav"
import Hero from "../components/Hero"
import NewsSection from "../components/NewsSection"
import TrendingNav from "../components/TrendingNav"
import News from "./News"
import { TypedUseSelectorHook, useSelector } from "react-redux"

const Home = () => {
    const [showNews, setShowNews] = useState(false)
    const { tag }:TypedUseSelectorHook = useSelector((state) => state.news)
    return (
        <div className="w-full h-full">
            <HeaderNav />
            <div className="w-[65%] sm:w-full sm:p-5 h-auto mx-auto">
                <div className={`w-full h-full ${showNews ? "block" : "hidden"}`}>
                    <News />
                </div>
                <div className={`w-full h-full ${showNews ? "hidden" : "block"}`}>
                    <Hero />
                    <TrendingNav />
                    <NewsSection setShowNews={setShowNews} />
                </div>
            </div>
        </div>
    )
}

export default Home