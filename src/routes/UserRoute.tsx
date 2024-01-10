import {Route, Routes} from "react-router";
import Content from "../components/Content";
import Blogs from "../pages/Blogs";
import {SetState} from "../utils/types";
import Account from "../pages/Account";
import BlogForm from "../components/BlogForm";
import ProtectedRoute from "./ProtectedRoute";
import News from "../pages/News";
import EditForm from "../components/EditForm";

type UserRouteType = {
	setShowInfo: SetState<boolean>;
};

const UserRoute = ({setShowInfo}: UserRouteType) => {
	return (
		<div onClick={() => setShowInfo(false)}>
			<Routes>
				<Route>
					<Route index element={<Content />} />
					<Route path="/news" element={<News />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/account" element={<Account />} />
						<Route path="/create" element={<BlogForm />} />
					</Route>
					<Route path="/edit" element={<EditForm />} />
				</Route>
			</Routes>
		</div>
	);
};

export default UserRoute;
