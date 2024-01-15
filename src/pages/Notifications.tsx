import {useEffect} from "react";
import Notify from "./Notify";
import axios from "axios";
import {useAppSelector} from "../hooks";

const Notifications = () => {
	const {user} = useAppSelector((state) => state.auth);
	// useEffect(() => {
	// 	try {
	// 		const userId = user?.id;
	// 		axios
	// 			.get(`/notification/get-notification/${userId}`)
	// 			.then(({data}) => console.log(data))
	// 			.catch((err) => console.log(err));
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }, []);
	return (
		<>
			<div className="w-full h-full">
				<div className="mt-10 sm:m-2 md:m-5 lg:m-5 xl:m-7">
					<Notify />
				</div>
			</div>
		</>
	);
};

export default Notifications;
