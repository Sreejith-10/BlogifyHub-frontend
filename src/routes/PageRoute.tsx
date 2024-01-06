import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AccountSetUp from "../pages/AccountSetUp"

const PageRoute = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/account-setup" element={<AccountSetUp />} />
        </Routes>
    )
}

export default PageRoute