import {Navigate, Outlet} from "react-router";
import {useAppSelector} from "../hooks";

const ProtectedRoute = () => {
	const {isLogged} = useAppSelector((state) => state.auth);
	return isLogged ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
