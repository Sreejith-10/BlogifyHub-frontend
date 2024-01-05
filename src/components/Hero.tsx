import { colors } from "../constants/colors"
import { imgages } from "../constants/images"

const Hero = () => {
    return (
        <div className="w-full h-auto mt-5">
            <div className="sm:relative sm:w-full sm:p-5 mx-auto flex">
                <div className="w-1/2 sm:w-full h-full">
                    <h1 className={`text-[${colors.primary}] text-6xl sm:text-2xl font-bold`}>Get latest news right here</h1>
                    <p className="font-medium text-xl sm:text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum consequatur architecto debitis assumenda, cum dignissimos, maiores neque id pariatur praesentium natus minus qui libero expedita dolorum, et deleniti a?
                    </p>
                    <button style={{ background: `${colors.primary}` }} className="py-1 px-2 rounded-md text-white mt-4">Show article</button>
                </div>
                <div className="w-1/2 h-2/5 md:w-full sm:hidden -z-10 flex flex-col items-center justify-end">
                    <div className="h-full w-full">
                        <img src={imgages.HeroImg} alt="not found" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero