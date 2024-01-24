
export const getTime = (sentT: any): string => {
	//to date 
	let postT = new Date(sentT);
	let now = new Date();

	//difference between current and post date
	let difference = Math.abs(Math.floor((now.getTime() - postT.getTime()) / 1000));
	
	if (difference < 60) {
		return `${difference} seconds ago`;
	} else if (difference < 3000) {
		const miutes = Math.floor(difference / 60);
		return `${miutes} minute${miutes > 1 ? "s" : ""} ago`;
	} else if (difference < 86400) {
		const hours = Math.floor(difference / 3600);
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	} else {
		const days = Math.floor(difference / 86400);
		return `${days} day${days > 1 ? "s" : ""} ago`;
	}
};
