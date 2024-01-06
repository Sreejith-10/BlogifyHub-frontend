import axios from "axios"
import PageRoute from "./routes/PageRoute"
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setAuth, setUser } from "./redux/authslice";
import { UserType } from "./utils/types";

const App = () => {
  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.withCredentials = true;
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }: { data: UserType }) => {
        if (!data) return
        dispatch(setUser(data))
        dispatch(setAuth(true))
      })
    }
  }, [])
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} containerStyle={{ zIndex: 99, cursor: "pointer" }} />
        <PageRoute />
      </div>
    </>
  )
}

export default App