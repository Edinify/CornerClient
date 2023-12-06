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

export const setLoadingMenuAction = (loadingValue) => ({
  type: CHECK_ACTION_TYPE.CHECK_LOADING,
  payload: loadingValue,
});

export const getCheckAction = (pageNumber) => async (dispatch) => {
  dispatch(setLoadingMenuAction(true))
  try {
    const { data } = await API.get(`/?page=${pageNumber}`);
    // console.log(data)
    dispatch({ type: CHECK_ACTION_TYPE.GET_CHECK, payload: data });
    dispatch({
      type: CHECK_ACTION_TYPE.GET_CHECK_LAST_PAGE,
      payload: pageNumber,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingMenuAction(false))
  }
};

export const getCheckUserAction = (_id) => async (dispatch) => {
  try {
    const { data } = await API.get(`/${_id}`);
    dispatch({ type: CHECK_ACTION_TYPE.GET_USER_CHECK, payload: {data} });
  } catch (error) {
    console.log(error);
  }
};

export const createCheckAction = (checkData) => async (dispatch) => {
  try {
    const { data } = await API.post("/", checkData);
    dispatch(getCheckAction());
    console.log(data, "create check");
    dispatch({ type: CHECK_ACTION_TYPE.CREATE_CHECK, payload: { data } });
  } catch (error) {
    console.log(error);
  }
};

export const updateCheckAction = (_id, checkData) => async (dispatch) => {
  try {
    const { data } = await API.patch(`/${_id}`, checkData);
    dispatch({ type: CHECK_ACTION_TYPE.UPDATE_CHECK, payload: data });
  } catch (error) {
    console.log(error);
  }
};
