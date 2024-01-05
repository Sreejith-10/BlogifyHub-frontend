import Tile from "./Tile"

const TrendingNav = () => {
    
    const trends = ["Trending", "Javascript", "Webdev", "Tesla", "Aws", "Sports"]
    return (
        <>
            <div className="w-full h-14 mt-5">
                <div className="w-3/4 sm:w-[90%] overflow-x-auto mx-auto flex items-center justify-center">
                    {trends.map((item) => {
                        return <Tile trend={item} />
                    })}
                </div>
            </div>
        </>
    )
}

export default TrendingNav