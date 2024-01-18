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
			<div className="w-full h-auto bg-gray-200 border border-slate-400 p-5 rounded-md">
				{data.message}
			</div>
		</>
	);
};

export default Notify;
