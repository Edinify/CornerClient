import { TABLES_ACTION_TYPE, TABLES_M0DAL_ACTION_TYPE, TABLES_USER_ACTION_TYPE } from "../actions-type";
import axios from "axios";
import { apiRoot } from "../../apiRoot";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: `${apiRoot}/table`,
  withCredentials: true,
});

const APIUSER = axios.create({
  baseURL: `${apiRoot}/table/all`,
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

const tablesModalOpen = (value) => ({
  type: TABLES_M0DAL_ACTION_TYPE.TABLES_OPEN_MODAL,
  payload: value,
});

export const setLoadingTablesAction = (loadingValue) => ({
  type: TABLES_ACTION_TYPE.TABLES_LOADING,
  payload: loadingValue,
});

const tablesModalLoading = (loadingValue) => ({
  type: TABLES_M0DAL_ACTION_TYPE.TABLES_MODAL_LOADING,
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

export const getTablesAction = (pageNumber) => async (dispatch) => {
  dispatch(setLoadingTablesAction(true));
  try {
    const { data } = await API.get(`/?page=${pageNumber}`);
    dispatch({ type: TABLES_ACTION_TYPE.GET_TABLES, payload: data });
    dispatch({type:TABLES_ACTION_TYPE.GET_TABLES_LAST_PAGE,payload:pageNumber})
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingTablesAction(false));
  }
};

export const getTablesUserAction = () => async (dispatch) => {
  dispatch(setLoadingTablesAction(true));
  try {
    const { data } = await APIUSER.get("/");
    dispatch({ type: TABLES_USER_ACTION_TYPE.GET_TABLES_USER, payload: data });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingTablesAction(false));
  }
};

export const createTablesAction = (tablesData) => async (dispatch) => {
  dispatch(tablesModalLoading(true));
  try {
    const { data } = await API.post("/", tablesData);
    dispatch(tablesModalOpen(false));
    dispatch(getTablesAction());
    toastSuccess("Yeni masa yarandı");
  } catch (error) {
    console.log(error);
    if (error.response.data.key === "table-already-exists") {
      toastError("Eyni nömrəli masa mövcuddur");
    }
  } finally {
    dispatch(tablesModalLoading(false));
  }
};

export const updateTableAction = (_id, tablesData) => async (dispatch) => {
  dispatch(tablesModalLoading(true));

  try {
    const { data } = await API.patch(`/${_id}`, tablesData);
    dispatch({ type: TABLES_ACTION_TYPE.UPDATE_TABLES, payload: data });
    dispatch(tablesModalOpen(false));
    toastSuccess(" Masa yeniləndi");
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(tablesModalLoading(false));
  }
};

export const deleteTablesAction = (_id) => async (dispatch) => {
  try {
    await API.delete(`/${_id}`);
    dispatch({ type: TABLES_ACTION_TYPE.DELETE_TABLES, payload: _id });
    toastSuccess("Masa silindi");
  } catch (error) {
    console.log(error);
  }
};
