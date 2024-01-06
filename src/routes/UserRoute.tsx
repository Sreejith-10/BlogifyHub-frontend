import { Route, Routes } from "react-router";
import Content from "../components/Content";
import Blogs from "../pages/Blogs";
import { SetState } from "../utils/types";
import Account from "../pages/Account";
import BlogForm from "../components/BlogForm";
import ProtectedRoute from "./ProtectedRoute";

type UserRouteType = {
	showNews: boolean;
	setShowNews: SetState<boolean>;
	setShowInfo: SetState<boolean>
};

const UserRoute = ({ showNews, setShowNews, setShowInfo }: UserRouteType) => {
	return (
		<div onClick={() => setShowInfo(false)}>
			<Routes>
				<Route>
					<Route
						index
						element={<Content showNews={showNews} setShowNews={setShowNews} />}
					/>
					<Route path="/blogs" element={<Blogs />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/account" element={<Account />} />
						<Route path="/create" element={<BlogForm />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
};

export default UserRoute;
