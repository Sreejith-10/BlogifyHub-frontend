import { useState } from "react"
import HeaderNav from "../components/HeaderNav"
import UserRoute from "../routes/UserRoute"
import Info from "../components/Info"

const Home = () => {
    const [showNews, setShowNews] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div className="w-full h-full">
            <HeaderNav showInfo={showInfo} setShowInfo={setShowInfo} />
            {showInfo &&
                <Info showInfo={showInfo} setShowInfo={setShowInfo} />
            }
            <div className="w-[65%] sm:w-full sm:p-5 h-auto mx-auto relative">
                <UserRoute showNews={showNews} setShowNews={setShowNews} setShowInfo={setShowInfo} />
            </div>
        </div>
    )
}

export default Home