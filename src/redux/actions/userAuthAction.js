import { toast } from "react-toastify";
import { apiRoot } from "../../apiRoot";
import axios from "axios";
import { USER_AUTH_ACTION_TYPE, USER_M0DAL_ACTION_TYPE } from "../actions-type";

const API = axios.create({
  baseURL: `${apiRoot}/user`,
  withCredentials: true,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("auth")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("auth")).accessToken
    }`;
  }
  return req;
});

const toastSuccess = (message) => {
  toast.success(message, {
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

const setLoadingAction=(loadingValue)=>({
  type:USER_AUTH_ACTION_TYPE.USER_AUTH_LOADING,payload:loadingValue
})

const userModalOpen=(value)=>({
  type:USER_M0DAL_ACTION_TYPE.GET_USER_MODAL,payload:value
})

const userModalLoading = (loadingValue)=>({
  type:USER_M0DAL_ACTION_TYPE.USER_MODAL_LOADING,
  payload:loadingValue
})

export const userLoginAction = (authData) => async (dispatch) => {
  console.log(authData)
  setLoadingAction(true)
  try {
    const { data } = await API.post("/login",{accessCode:authData});
    console.log(data)
    dispatch({type:USER_AUTH_ACTION_TYPE.LOGIN_USER,payload:data})
  } catch (error) {
    console.log(error);
  }
  finally{
    setLoadingAction(false)
  }
};

export const getUserAction=()=>async(dispatch)=>{
  dispatch(userModalLoading(true))
  try {
    const {data} = await API.get('/code');
    dispatch({type:USER_AUTH_ACTION_TYPE.GET_ACCESS_CODE,payload:data});
    

  } catch (error) {
    console.log(error)
  }
  finally{
    dispatch(userModalLoading(false))
  }
}

export const createUserAction=(userData)=>async(dispatch)=>{
  dispatch(userModalLoading(true))
  try {
    const {data} = await API.post("/code",userData);
    dispatch({type:USER_AUTH_ACTION_TYPE.CREATE_ACCESS_CODE,payload:data})
    dispatch(userModalOpen(false))
    dispatch(getUserAction())
    toastSuccess("Kod yeniləndi")
  } catch (error) {
    console.log(error)
  }
  finally{
    dispatch(userModalLoading(false))
  }
}
