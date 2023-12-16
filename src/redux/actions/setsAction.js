import { toast } from "react-toastify";
import { apiRoot } from "../../apiRoot";
import { SETS_ACTION_TYPE, SETS_M0DAL_ACTION_TYPE } from "../actions-type";
import axios from "axios";

const API = axios.create({
  baseURL: `${apiRoot}/menu/set`,
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

export const setLoadingSetAction = (loadingValue) => ({
  type: SETS_ACTION_TYPE.SETS_LOADING,
  payload: loadingValue,
});

export const setModalOpen=(value)=>({
  type:SETS_M0DAL_ACTION_TYPE.SETS_OPEN_MODAL,
  payload:value
})

export const setModalLoading=(loadingValue)=>({
  type:SETS_M0DAL_ACTION_TYPE.SETS_MODAL_LOADING,
  payload:loadingValue
})

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

export const getSetAction = (pageNumber) => async (dispatch) => {
  dispatch(setLoadingSetAction(true));
  try {
    const { data } = await API.get(`/?page=${pageNumber}`);
    console.log(data," set data")
    dispatch({ type: SETS_ACTION_TYPE.GET_SETS, payload: data });
    dispatch({
      type: SETS_ACTION_TYPE.GET_SETS_LAST_PAGE,
      payload: pageNumber,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingSetAction(false));
  }
};

export const createSetAction = (setData) => async (dispatch) => {
  console.log(setData)
  dispatch(setModalLoading(true))
  try {
    const { data } = await API.post("/", setData);
    dispatch({ type: SETS_ACTION_TYPE.CREATE_SETS, payload: data });
    dispatch(getSetAction());
    dispatch(setModalOpen(false))
    toastSuccess("Yeni set əlavə edildi");
  } catch (error) {
    console.log(error);
  }
  finally{
    dispatch(setModalLoading(false))
  }
};

export const updateSetAction = (_id, setData) => async (dispatch) => {
  dispatch(setModalLoading(true))
  try {
    const { data } = await API.patch(`/${_id}`, setData);
    dispatch({ type: SETS_ACTION_TYPE.UPDATE_SETS, payload: data });
    dispatch(setModalOpen(false))
    toastSuccess("Set yeniləndi");
  } catch (error) {
    console.log(error);
  }
  finally{
    dispatch(setModalLoading(false))
  }
};

export const deleteSetAction = (_id) => async (dispatch) => {
  try {
    await API.delete(`${_id}`);
    dispatch({ type: SETS_ACTION_TYPE.DELETE_SETS, payload: _id });
    toastSuccess("Set silindi");
  } catch (error) {
    console.log(error);
  }
};

export const addSetOrderAction = (set) => async (dispatch) => {
  try {
    dispatch({ type: SETS_ACTION_TYPE.ADD_SET_PRODUCTS, payload: set });
  } catch (error) {
    console.log(error);
  }
};
