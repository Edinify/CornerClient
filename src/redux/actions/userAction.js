import axios from "axios";
import { USER_ACTION_TYPE } from "../actions-type";
import { logoutAction } from "./auth";
import { apiRoot } from "../../apiRoot";

// const refreshApi = axios.create({
//   baseURL: `${apiRoot}/user/auth/refresh_token`,
//    withCredentials:true
// });

const API = axios.create({
  baseURL: `${apiRoot}/admin`,
   // withCredentials: true,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("auth")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("auth")).accessToken
    }`;
  }
  return req;
});

export const userAction = () => async (dispatch) => {
  try {
    const { data } = await API.get("/");
    dispatch({ type: USER_ACTION_TYPE.ADD_USER, payload: data });
    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    // console.log(data, "data");(error);
    //   const originalRequest = error.config;
    //   if (error?.response?.status === 403 && !originalRequest._retry) {
    //     originalRequest._retry = true;
    //     try {
    //       const token = await refreshApi.get("/");
    //       localStorage.setItem(
    //         "auth",
    //         JSON.stringify({
    //           AccessToken: token.data.accesstoken,
    //         })
    //       );

    //       const { data } = await API.get("/auth");
    //       dispatch({ type: USER_ACTION_TYPE.ADD_USER, payload: data });
    //       localStorage.setItem("userData",JSON.stringify(data))
    //     } catch (error) {
    //       // console.log(data, "data");(error);
    //       if (error?.response?.status === 401) {
    //         return dispatch(logoutAction());
    //       }
    //     }
    //   }
    // }
  }
};
