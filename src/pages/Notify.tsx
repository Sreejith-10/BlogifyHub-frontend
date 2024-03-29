import {BiSolidMessage} from "react-icons/bi";
import {BsHandThumbsUpFill, BsReplyFill} from "react-icons/bs";
import {getTime} from "../utils/time";

type NotifyProps = {
	data: {
		message: string;
		senderId: string;
		notificationType: string;
		date: string;
	};
};

const Notify = ({data}: NotifyProps) => {
	return (
		<>
			<div className="w-full h-auto bg-gray-200 border border-slate-500 p-5 rounded-md flex items-center sm:justify-evenly">
				<div className="w-[10%] h-auto">
					{data.notificationType === "like" && (
						<BsHandThumbsUpFill size={40} fill={"#0e4c94"} />
					)}
					{data.notificationType === "comment" && (
						<BiSolidMessage size={40} fill={"#0e4c94"} />
					)}
					{data.notificationType === "reply" && (
						<BsReplyFill size={40} fill={"#0e4c94"} />
					)}
				</div>
				<div className="w-[75%] text-lg font-medium">{data.message}</div>
				<div className="w-auto sm:hidden">{getTime(data.date)}</div>
			</div>
		</>
	);
};

export default Notify;
