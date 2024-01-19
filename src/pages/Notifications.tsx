import {useEffect, useState} from "react";
import Notify from "./Notify";
import axios from "axios";
import {useAppSelector} from "../hooks";

type NotificationType = {
	authorId: string;
	notifications: {
		message: string;
		senderId: string;
		notificationType: string;
		date: string;
	}[];
};

const Notifications = () => {
	const {user} = useAppSelector((state) => state.auth);
	const [notifi, setNotifi] = useState<NotificationType>();
	useEffect(() => {
		try {
			const userId = user?.id;
			axios
				.get(`/notification/get-notification/${userId}`)
				.then(({data}) => setNotifi(data))
				.catch((err) => console.log(err));
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<>
			<div className="w-full h-full">
				<div className="mt-10 sm:m-2 md:m-5 lg:m-5 xl:m-7 flex flex-col gap-5">
					{notifi?.notifications?.map((item, id) => (
						<Notify data={item} key={id} />
					))}
				</div>
			</div>
		</>
	);
};

export default Notifications;
