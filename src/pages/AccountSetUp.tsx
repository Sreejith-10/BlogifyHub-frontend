
const AccountSetUp = () => {
    return (
        <div className="w-[450px] h-[600px] sm:w-[350px] p-10 md:px-6 bg-slate-200 rounded-md shadow-md flex items-center justify-between flex-col">
            <div className="w-[90%] h-[100px] flex flex-col">
                <h1 className="text-3xl font-bold text-slate-800">User Data</h1>
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">Name</label>
                <input
                    type="text"
                    className="h-10 rounded-md outline-none p-2 border border-slate-400"
                />
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">Email</label>
                <input
                    type="text"
                    className="h-10 rounded-md outline-none p-2 border border-slate-400"
                />
            </div>
            <div className="w-[90%] h-[100px] flex flex-col">
                <label htmlFor="" className="text-slate-700">Password</label>
                <div className="h-10 w-full relative">
                    <input
                        type='text'
                        className="h-full w-full rounded-md outline-none p-2 border border-slate-400"
                    />

                </div>
            </div>
            <div className="w-[90%] h-[200px] flex flex-col items-center justify-evenly">
                <button className="w-full py-3 sm:py-2 bg-pink-600 rounded-md text-white shadow-md shadow-pink-500 hover:shadow-pink-800 active:translate-y-1 active:shadow-inner active:shadow-slate-400">
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default AccountSetUp