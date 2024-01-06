import Comments from "../components/Comments"
import { colors } from "../constants/colors"
import { BsHandThumbsUp } from "react-icons/bs"
import { FaArrowLeft } from "react-icons/fa"
import { SetState } from "../utils/types"
import { useEffect } from "react"

type NewsProps = { showNews: boolean, setShowNews: SetState<boolean> }

const News = ({ showNews, setShowNews }: NewsProps) => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [showNews])
    return (
        <>
            <div className="w-full h-full mt-5 sm:m-0">
                <div className="w-full h-20 flex items-center gap-6 sm:flex-col">
                    <div className="sm:w-full z-50">
                        <button className="sm:w-auto flex items-center justify-center gap-1 border border-[#0e4c94] text-[#0e4c94] px-2 py-1 rounded-md hover:bg-[#0e4c94] hover:text-white ease-in delay-150 duration-150 " onClick={() => setShowNews(false)}><FaArrowLeft /> Back</button>
                    </div>
                    <div className="flex w-full h-auto gap-7 items-center">
                        <img src="/images/images (1) (10).jpeg" alt="" className="w-16 h-w-16 rounded-full" />
                        <div className="">
                            <h1 className={`text-[${colors.primary}] font-bold text-xl`}>Son Goku</h1>
                            <p>Front end developer</p>
                        </div>
                        <button style={{ background: `${colors.primary}` }} className="text-white px-2 py-1 rounded-md">View profile</button>
                        <BsHandThumbsUp size={30} />
                    </div>
                </div>
                <div className="w-full h-[500px] sm:h-[300px] sm:mt-20">
                    <img src=" /images/Img4.jpeg" alt="" className="w-full h-full" />
                </div>
                <div className="w-full my-5 text-4xl font-bold">
                    <h1>JavaScript is a scam</h1>
                </div>
                <div className="w-full h-auto">
                    <p className="font-thin text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus necessitatibus assumenda rerum architecto repellendus asperiores dignissimos quod, fugit molestias ut quam atque laboriosam recusandae voluptatum repudiandae tenetur impedit perspiciatis perferendis optio voluptatibus enim et aspernatur! Odit molestias magnam fuga exercitationem! Repellendus hic nesciunt laudantium debitis atque dolorum ex itaque quo quaerat non, tempora beatae, veritatis minima optio natus deserunt amet sed? Ab sapiente eos fugiat ratione voluptates, quam reiciendis vero recusandae nostrum. Ipsa sit illum, iure consectetur, accusantium unde eos voluptatem eveniet nostrum rem expedita tenetur molestiae consequuntur itaque! Mollitia delectus placeat quia a quisquam ullam culpa reprehenderit pariatur tempore neque expedita architecto, fuga, quibusdam recusandae corrupti nemo earum asperiores doloremque possimus incidunt labore totam excepturi in? Eius iste obcaecati dignissimos possimus non amet, ab iure vero impedit eum veniam explicabo praesentium magni dolorum culpa animi deserunt placeat! Eos tenetur dolorum eius quis dolorem iste autem. At vitae quam, sapiente a, optio iure possimus error officia, facilis consequatur architecto nemo quo aut culpa magni est? Ratione quas suscipit delectus neque cupiditate sequi soluta sint natus, corporis reiciendis minus iure veniam nostrum ex excepturi veritatis voluptates voluptas deserunt expedita enim aliquid eius, animi sit. Sit illo dolor fugit alias neque?</p>
                </div>
                <div className="w-full h-auto mt-20 sm:mt-10 flex flex-col items-center justify-center">
                    <div className="w-full h-auto text-center mb-3 text-2xl">
                        <h1>Add a Comment</h1>
                    </div>
                    <div className="w-1/2 sm:w-full h-auto relative">
                        <textarea style={{ border: `solid 2px ${colors.primary}`, borderRadius: "8px" }} className="w-full h-60 p-3 outline-none" />
                        <button style={{ background: `${colors.primary}` }} className={`absolute bottom-5 right-3 text-white px-2 py-1 rounded-md`}>Comment</button>
                    </div>
                </div>
                <div className="w-full h-auto mt-20 flex flex-col items-center justify-center">
                    <div className="w-full mb-5">
                        <h1 className="text-2xl">All comments(10)</h1>
                    </div>
                    <div className="w-full h-auto my-6 flex flex-col items-center justify-center gap-7" >
                        <Comments />
                        <Comments />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News