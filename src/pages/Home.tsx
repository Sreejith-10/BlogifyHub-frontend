import { useState } from "react"
import HeaderNav from "../components/HeaderNav"
import Hero from "../components/Hero"
import NewsSection from "../components/NewsSection"
import TrendingNav from "../components/TrendingNav"
import News from "./News"
import BlogForm from "../components/BlogForm"

const Home = () => {
    const [showNews, setShowNews] = useState(false)
    const [showForm, setShowForm] = useState(true)
    return (
        <div className="w-full h-full">
            <HeaderNav setShowForm={setShowForm} />
            {showForm && <div className="w-full h-full z-50 absolute"><BlogForm /></div>}
            <div className="w-[65%] sm:w-full sm:p-5 h-auto mx-auto relative">
                <div className={`w-full h-full ${showNews ? "block" : "hidden"}`}>
                    <News showNews={showNews} setShowNews={setShowNews} />
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