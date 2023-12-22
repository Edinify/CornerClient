import axios from "axios";
import { MENU_ACTION_TYPE, MENU_M0DAL_ACTION_TYPE, MENU_USER_ACTION_TYPE } from "../actions-type";
import { apiRoot } from "../../apiRoot";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: `${apiRoot}/menu`,
   withCredentials:true
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("auth")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("auth")).accessToken
    }`;
  }
  return req;
});

const APIUSER = axios.create({
  baseURL: `${apiRoot}/menu/all`,
   withCredentials: true,
});

export const setLoadingMenuAction = (loadingValue) => ({
  type: MENU_ACTION_TYPE.MENU_LOADING,
  payload: loadingValue,
});

const menuModalLoading = (loadingValue) => ({
  type: MENU_M0DAL_ACTION_TYPE.MENU_MODAL_LOADING,
  payload: loadingValue,
});

const menuModalOpen = (value) => ({
  type: MENU_M0DAL_ACTION_TYPE.MENU_OPEN_MODAL,
  payload: value,
});

const toastSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
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


export const getMenusAction = (pageNumber) => async (dispatch) => {
  dispatch(setLoadingMenuAction(true))
  try {
    const { data } = await API.get(`/?page=${pageNumber}`);
    dispatch({ type: MENU_ACTION_TYPE.GET_MENU, payload: data });
    dispatch({type:MENU_ACTION_TYPE.GET_MENU_LAST_PAGE,payload:pageNumber})
  } catch (error) {
    // console.log(data, "data");(error);
  }
  finally{
    dispatch(setLoadingMenuAction(false))
  }
};
export const getMenusUserAction = () => async (dispatch) => {
  dispatch(setLoadingMenuAction(true))
  try {
    const { data } = await APIUSER.get("/");
    dispatch({ type: MENU_USER_ACTION_TYPE.GET_MENU_USER, payload: data });
  } catch (error) {
    // console.log(data, "data");(error);
  }
  finally{
    dispatch(setLoadingMenuAction(false))
  }
};

export const createMenusAction = (menuData) => async (dispatch) => {
  dispatch(menuModalLoading(true))
  try {
    const { data } = await API.post("/", menuData);
    dispatch(menuModalOpen(false))
    dispatch(getMenusAction())
    toastSuccess("Yeni məhsul yaradıldı")

  } catch (error) {
    // console.log(data, "data");(error);
  }
  finally{
    dispatch(menuModalLoading(false))
  }
};

export const updateMenusAction = (_id, menuData) => async (dispatch) => {
  dispatch(menuModalLoading(true))
  // console.log(data, "data");(menuData)
  try {
    const { data } = await API.patch(`/${_id}`, menuData);
    
    dispatch({ type: MENU_ACTION_TYPE.UPDATE_MENU, payload: data });
    dispatch(menuModalOpen(false))
    toastSuccess("Məhsul yeniləndi")
  } catch (error) {
    // console.log(data, "data");(error);
  }
  finally{
    dispatch(menuModalLoading(false))
  }
};

export const deleteMenusAction = (_id) => async (dispatch) => {
  try {
    await API.delete(`/${_id}`);
    dispatch({ type: MENU_ACTION_TYPE.DELETE_MENU, payload: _id });
    toastSuccess("Məhsul silindi")
  } catch (error) {
    // console.log(data, "data");(error);
  }
};
