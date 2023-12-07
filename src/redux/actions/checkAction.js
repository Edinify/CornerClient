import { CHECK_ACTION_TYPE } from "../actions-type";
import axios from "axios";
import { apiRoot } from "../../apiRoot";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: `${apiRoot}/check`,
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

export const setLoadingCheckction = (loadingValue) => (
  console.log(loadingValue, "loadinggggg"),
  {
    type: CHECK_ACTION_TYPE.CHECK_USER_LOADING,
    payload: loadingValue,
  }
);

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
export const createCheckAction = (checkData) => async (dispatch) => {
  console.log(checkData, "test 111111");
  dispatch(setLoadingCheckction(true));
  try {
    const { data } = await API.post("/", checkData);
    // console.log(data, "data");(data, "create check");
    toastSuccess("Yeni masa açıldı");
    dispatch({ type: CHECK_ACTION_TYPE.CREAT_USER_CHECK, payload: data });
  } catch (error) {
    // console.log(data, "data");(error);
  }
  finally{
    dispatch(setLoadingCheckction(false)) 
  }
};

export const getCheckUserAction = (_id) => async (dispatch) => {
  dispatch(setLoadingCheckction(true))
  try {
    const { data } = await API.get(`/${_id}`);
    dispatch({ type: CHECK_ACTION_TYPE.GET_USER_CHECK, payload: data });
  } catch (error) {
    // console.log(data, "data");(error);
  }
  finally{
    dispatch(setLoadingCheckction(false)) 
  }
};

export const updateUserCheckAction = (_id, checkData) => async (dispatch) => {
  try {
    const { data } = await API.patch(`/${_id}`, checkData);
    dispatch({ type: CHECK_ACTION_TYPE.UPDATE_CHECK, payload: data });
  } catch (error) {
    // console.log(data, "data");(error);
  }
};

export const addOrderAction = (order) => async (dispatch) => {
  try {
    dispatch({ type: CHECK_ACTION_TYPE.ADD_ORDER_ACTION, payload: order });
  } catch (error) {
    // console.log(data, "data");(error.message);
  }
};

export const removeOrderAction = (order) => async (dispatch) => {
  try {
    dispatch({ type: CHECK_ACTION_TYPE.REMOVE_ORDER_ACTION, payload: order });
  } catch (error) {
    // console.log(data, "data");(error.message);
  }
};

// admin check action

export const getCheckAction = (pageNumber) => async (dispatch) => {
  dispatch(setLoadingCheckction(true));
  try {
    const { data } = await API.get(`/?page=${pageNumber}`);
    // // console.log(data, "data");(data)
    dispatch({ type: CHECK_ACTION_TYPE.GET_CHECK, payload: data });
    dispatch({
      type: CHECK_ACTION_TYPE.GET_CHECK_LAST_PAGE,
      payload: pageNumber,
    });
  } catch (error) {
    // console.log(data, "data");(error);
  } finally {
    dispatch(setLoadingCheckction(false));
  }
};

export const updateCheckAction = (_id, checkData) => async (dispatch) => {
  dispatch(setLoadingCheckction(true));
  // console.log(data, "data");(checkData, "salam necesen");
  try {
    const { data } = await API.patch(`/${_id}`, checkData);
    dispatch({ type: CHECK_ACTION_TYPE.UPDATE_CHECK, payload: data });
  } catch (error) {
    // console.log(data, "data");(error);
  }
  finally{
    dispatch(setLoadingCheckction(false));

  }
};
