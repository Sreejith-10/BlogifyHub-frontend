import axios from "axios";

export const fetchUser = async (id:string) => {
	try{
        const {data} = await axios
		.get(`/user/get-user/${id}`)
        if(data) return data
    }catch(err){
        console.log(err);
    }
};
