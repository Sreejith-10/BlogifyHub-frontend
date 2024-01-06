import { colors } from "../constants/colors"
import { SetState } from "../utils/types"
import Card from "./Card"
import { useAppSelector } from "../hooks"

const NewsSection = ({ setShowNews }: { setShowNews: SetState<boolean> }) => {
    const { tag } = useAppSelector((state) => state.news)
    return (
        <>
            <div className="w-full h-full mt-6 flex items-center justify-center flex-col">
                <div className={`text-[${colors.primary}] text-4xl font-medium`}>
                    {tag}
                </div>
                <div className="w-full h-auto mt-8 mb-4 flex flex-wrap gap-4 sm:justify-center">
                    <Card setShowNews={setShowNews} />
                    <Card setShowNews={setShowNews} />
                    <Card setShowNews={setShowNews} />
                    <Card setShowNews={setShowNews} />
                    <Card setShowNews={setShowNews} />
                    <Card setShowNews={setShowNews} />
                    <Card setShowNews={setShowNews} />
                </div>
            </div>
        </>
    )
}

export default NewsSection