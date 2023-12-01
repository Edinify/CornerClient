import { toast } from "react-toastify";
import { apiRoot } from "../../apiRoot";
import axios from "axios";
import { USER_AUTH_ACTION_TYPE } from "../actions-type";

const API = axios.create({
  baseURL: `${apiRoot}/user`,
  withCredentials: true,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("auth")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("auth")).AccessToken
    }`;
  }
  return req;
});

const toastError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    toastClassName: "custom-toast",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const userLoginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await API.post("/login",authData);
    dispatch({type:USER_AUTH_ACTION_TYPE.LOGIN_USER,payloda:data})
  } catch (error) {
    console.log(error);
  }
};
