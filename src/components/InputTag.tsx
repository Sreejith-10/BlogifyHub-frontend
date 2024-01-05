import { KeyboardEvent, useState } from "react";
import { BsX } from "react-icons/bs";

const InputTag = () => {
    const [tagArray, setTagArray] = useState<string[]>([]);
    const [tag, setTag] = useState("");
    const keyDownHandler = (e: KeyboardEvent) => {
        if (e.key !== "Enter") return;
        if (tag.trim() === "") return;
        setTagArray([...tagArray, tag]);
        setTag("");
    };
    const removeTag = (i: number) => {
        setTagArray((prev) => (
            prev.filter((item, id) => (id != i))
        ))
    }
    return (
        <div className="w-full h-full">
            <label htmlFor="" className="text-slate-700">
                Tag
            </label>
            <input
                value={tag}
                onKeyDown={keyDownHandler}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Tags"
                className="w-full h-10 rounded-md outline-none p-2 border border-slate-400"
            />
            <div className="w-full h-auto p-3 flex flex-wrap gap-4">
                {tag.length <= 0 ? <h1 className="text-slate-500">No tags</h1> :
                    tagArray.map((item, id) => {
                        return (
                            <div key={id} className="bg-slate-300 text-slate-800 px-2 py-1 rounded-md flex items-center justify-center gap-3">
                                {item}
                                <BsX size={25} className="bg-slate-800 rounded-full fill-white" onClick={() => removeTag(id)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default InputTag;
