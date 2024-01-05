import { useAppDispatch } from "../hooks"
import { setTag } from "../redux/newsSlice"

const Tile = ({ trend }: { trend: string }) => {
    const dispatch = useAppDispatch()
    return (
        <label onClick={() => dispatch(setTag(trend))} className="w-auto h-auto px-2 py-1 m-5 rounded-md shadow-md text-slate-700 cursor-pointer bg-slate-200 hover:bg-white hover:shadow-slate-600 hover:shadow-sm hover:text-slate-500">{trend}</label>
    )
}

export default Tile