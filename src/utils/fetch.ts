import axios from "axios";

export const fetchUser = async (id: string) => {
	try {
		if (id) {
			const {data} = await axios.get(`/user/get-user/${id}`);
			if (data.error) return console.log(data.error);
			return data;
		}
	} catch (err) {
		console.log(err);
	}
};
