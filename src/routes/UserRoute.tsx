import { Route, Routes } from "react-router";
import Content from "../components/Content";
import Blogs from "../pages/Blogs";
import { SetState } from "../utils/types";
import Account from "../pages/Account";
import BlogForm from "../components/BlogForm";

type UserRouteType = {
	showNews: boolean;
	setShowNews: SetState<boolean>;
};

const UserRoute = ({ showNews, setShowNews }: UserRouteType) => {
	return (
		<Routes>
			<Route>
				<Route
					index
					element={<Content showNews={showNews} setShowNews={setShowNews} />}
				/>
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/account" element={<Account />} />
				<Route path="/create" element={<BlogForm />} />
			</Route>
		</Routes>
	);
};

export default UserRoute;
