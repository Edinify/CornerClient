import { CHECK_ACTION_TYPE } from "../actions-type/index";
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

export const setLoadingCheckction = (loadingValue) => ({
  type: CHECK_ACTION_TYPE.CHECK_USER_LOADING,
  payload: loadingValue,
});

export const setLoadingSubmitCheckction = (loadingValue) => ({
  type: CHECK_ACTION_TYPE.CHECK_SUBMIT_LOADING,
  payload: loadingValue,
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
export const createCheckAction = (checkData) => async (dispatch) => {
  dispatch(setLoadingCheckction(true));
  try {
    const { data } = await API.post("/", checkData);
    console.log(data, "create table");
    // console.log(data, "data");(data, "create check");
    toastSuccess("Yeni masa açıldı");
    dispatch({ type: CHECK_ACTION_TYPE.CREAT_USER_CHECK, payload: data });
  } catch (error) {
    // console.log(data, "data");(error);
  } finally {
    dispatch(setLoadingCheckction(false));
  }
};

export const getCheckUserAction = (_id) => async (dispatch) => {
  dispatch(setLoadingCheckction(true));
  try {
    const { data } = await API.get(`/${_id}`);
    // console.log(data)
    dispatch({ type: CHECK_ACTION_TYPE.GET_USER_CHECK, payload: data });
  } catch (error) {
    // console.log(data, "data");(error);
  } finally {
    dispatch(setLoadingCheckction(false));
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

export const addSetAction = (set) => async (dispatch) => {
  try {
    dispatch({ type: CHECK_ACTION_TYPE.ADD_SET_ACTION, payload: set });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeSetAction = (set) => async (dispatch) => {
  try {
    dispatch({ type: CHECK_ACTION_TYPE.REMOVE_SET_ACTION, payload: set });
  } catch (error) {
    console.log(error.message);
  }
};

// admin check action

export const getCheckAction =
  (pageNumber, startDate = "", endDate = "") =>
  async (dispatch) => {
    dispatch(setLoadingCheckction(true));
    console.log(startDate, "start");
    console.log(endDate, "end");
    try {
      const { data } = await API.get(
        `/?page=${pageNumber}&startDate=${startDate || ""}&endDate=${
          endDate || ""
        }`
      );
      // console.log(data)
      dispatch({ type: CHECK_ACTION_TYPE.GET_CHECK, payload: data });
      dispatch({
        type: CHECK_ACTION_TYPE.GET_CHECK_LAST_PAGE,
        payload: pageNumber,
      });
    } catch (error) {
      console.log(error);
      // console.log(data, "data");(error);
    } finally {
      dispatch(setLoadingCheckction(false));
    }
  };

export const updateCheckAction = (_id, checkData) => async (dispatch) => {
  dispatch(setLoadingSubmitCheckction(true));

  try {
    const { data } = await API.patch(`/${_id}`, checkData);
    dispatch({ type: CHECK_ACTION_TYPE.UPDATE_CHECK, payload: data });

    console.log(data, "salam necesen data");
    if (data?.status === "confirmed" || data?.status === "cancelled") {
      dispatch({
        type: CHECK_ACTION_TYPE.CHECK_SUBMIT_LOADING,
        payload: false,
      });
      dispatch({ type: CHECK_ACTION_TYPE.ORDER_MODAL, payload: false });
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingCheckction(false));
  }
};
