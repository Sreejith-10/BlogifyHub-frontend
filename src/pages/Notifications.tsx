import {useEffect, useState} from "react";
import Notify from "./Notify";
import axios from "axios";
import {useAppSelector} from "../hooks";
import {SetState} from "../utils/types";

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
				<div className="mt-10 sm:m-2 md:m-5 lg:m-5 xl:m-7">
					{notifi?.notifications.map((item) => (
						<Notify data={item} />
					))}
				</div>
			</div>
		</>
	);
};

export default Notifications;
