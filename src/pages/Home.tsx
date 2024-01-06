import { useState } from "react"
import HeaderNav from "../components/HeaderNav"
import BlogForm from "../components/BlogForm"
import UserRoute from "../routes/UserRoute"

const Home = () => {
    const [showNews, setShowNews] = useState(false)
    const [showForm, setShowForm] = useState(false)
    return (
        <div className="w-full h-full">
            <HeaderNav setShowForm={setShowForm} />
            {showForm && <div className="w-full h-full z-50 absolute"><BlogForm setShowForm={setShowForm} /></div>}
            <div className="w-[65%] sm:w-full sm:p-5 h-auto mx-auto relative">
                <UserRoute showNews={showNews} setShowNews={setShowNews} />
            </div>
        </div>
    )
}

export default Home