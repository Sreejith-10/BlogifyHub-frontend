import { Route, Routes } from "react-router";
import Content from "../components/Content";
import Blogs from "../pages/Blogs";
import Account from "../pages/Account";
import BlogForm from "../components/BlogForm";
import ProtectedRoute from "./ProtectedRoute";
import News from "../pages/News";
import EditForm from "../components/EditForm";
import Author from "../pages/Author";
import Notifications from "../pages/Notifications";
import Statistics from "../pages/Statistics";

const UserRoute = () => {
<<<<<<< HEAD
	return (
		<div>
			<Routes>
				<Route>
					<Route index element={<Content />} />
					<Route path="/news" element={<News />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/account" element={<Account />} />
						<Route path="/notification" element={<Notifications />} />
						<Route path="/statistics/*" element={<Statistics />} />
						<Route path="/create" element={<BlogForm />} />
						<Route path="/author" element={<Author />} />
						<Route path="/edit" element={<EditForm />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
=======
  return (
    <div>
      <Routes>
        <Route>
          <Route index element={<Content />} />
          <Route path="/news" element={<News />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Account />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/statistics/*" element={<Statistics />} />

            <Route path="/create" element={<BlogForm />} />
            <Route path="/author" element={<Author />} />
            <Route path="/edit" element={<EditForm />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
>>>>>>> a25ad58860129dbec27f3af6e8328ba0a32f792e
};

export default UserRoute;
