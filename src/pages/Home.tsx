import { useState } from "react"
import HeaderNav from "../components/HeaderNav"
import UserRoute from "../routes/UserRoute"

const Home = () => {
    const [showNews, setShowNews] = useState(false)
    return (
        <div className="w-full h-full">
            <HeaderNav />
            <div className="w-[65%] sm:w-full sm:p-5 h-auto mx-auto relative">
                <UserRoute showNews={showNews} setShowNews={setShowNews} />
            </div>
        </div>
    )
}

export default Home