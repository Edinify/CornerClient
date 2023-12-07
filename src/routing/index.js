import { Route, Routes, useLocation, useNavigate } from "react-router";
import { Login } from "../Pages/LoginPage/LoginPage";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/actions/userAction";
import { Header } from "../Layout/Header/Header";
import LoginRoute from "./LoginRoute";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Sidebar from "../Layout/Sidebar/Sidebar";
import UserPanelRoute from "./UserPanelRoute";
import AdminPanelRoute from "./AdminPanelRoute";
import { LoginUser } from "../Pages/LoginPage/LoginUser";
import WorkersPage from "../Pages/WorkerPage/WorkerPage";
import { getUserAction } from "../redux/actions/userAuthAction";

export const Routing = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const forgetPassword = useSelector((state) => state.forgetPassword);
  const { show } = useSelector((state) => state.show);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("auth");
  const { userAuth } = useSelector((state) => state.userAuth);




  useEffect(() => {
    
    if (userAuth?.role === "user" && !notFound) {
      if (location.pathname.startsWith("/login")) {
        // // console.log(data, "data");(userAuth?.role === "user" && !notFound)
        navigate("/workers");
      }
    }

    
    if (token) {
      if (!user._id) {
        dispatch(userAction());
      }
      if (user.role === "admin" && !notFound) {
        if (location.pathname.startsWith("/login")) {
          navigate("/finance/expenses");
        } else {
          return () => {};
        }
      }
    } else if (forgetPassword.login && !userAuth?._id) {
      navigate("/login");
    } else {
      if (forgetPassword.email) {
        navigate("/forget");
      } else if (forgetPassword.otp) {
        navigate("/send");
      } else if (forgetPassword.changePassword) {
        navigate("/change");
      }
    }
    
  }, [auth, user, forgetPassword,userAuth]);

  

 
  const [notFound, setNotFound] = useState(false);
  // // console.log(data, "data");(userAuth?.role === "user")
  return (
    <div className={show ? "" : "main-container"}>
      {!show &&  <Sidebar />}
      <div className="left">
        {!show && <Header />}

        <Routes>
          <Route path="/login" element={<LoginUser />} />
          <Route path="/login-admin" element={<Login />} />
          

          {LoginRoute()}
           <Route path="/workers" element={<WorkersPage />} />
          
          {/* {userAuth?.role === "user" && UserPanelRoute()} */}
          {userData?.role === "admin" && AdminPanelRoute()}
          <Route
            path="*"
            element={<NotFoundPage setNotFound={setNotFound} />}
          />
        </Routes>
      </div>
    </div>
  );
};
