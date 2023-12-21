import axios from "axios";
import {
  WAREHOUSE_ACTION_TYPE,
  WAREHOUSE_M0DAL_ACTION_TYPE,
} from "../actions-type";
import { apiRoot } from "../../apiRoot";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: `${apiRoot}/base`,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("auth")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("auth")).accessToken
    }`;
  }
  return req;
});

export const setLoadingWarehouseAction = (loadingValue) => ({
  type: WAREHOUSE_ACTION_TYPE.WAREHOUSE_LOADING,
  payload: loadingValue,
});

const warehouseModalLoading = (loadingValue) => ({
  type: WAREHOUSE_M0DAL_ACTION_TYPE.WAREHOUSE_MODAL_LOADING,
  payload: loadingValue,
});
const warehouseModalOpen = (value) => ({
  type: WAREHOUSE_M0DAL_ACTION_TYPE.WAREHOUSE_OPEN_MODAL,
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

export const getWarehouseAction = (pageNumber) => async (dispatch) => {
  dispatch(setLoadingWarehouseAction(true));
  try {
    const { data } = await API.get(`/?page=${pageNumber}`);
    // console.log(data)
    dispatch({ type: WAREHOUSE_ACTION_TYPE.GET_WAREHOUSE, payload: data });
    dispatch({
      type: WAREHOUSE_ACTION_TYPE.GET_WAREHOUSE_LAST_PAGE,
      payload: pageNumber,
    });
  } catch (error) {
    // console.log(data, "data");(error);
  } finally {
    dispatch(setLoadingWarehouseAction(false));
  }
};

export const getWarehouseActionList = (categoryId) => async (dispatch) => {
  dispatch(setLoadingWarehouseAction(true));
  console.log(categoryId, "categoryId");
  try {
    const { data } = await API.get(`/list?categoryId=${categoryId}`);

    console.log(data, "products by categoryId");
    dispatch({ type: WAREHOUSE_ACTION_TYPE.GET_WAREHOUSE_LIST, payload: data });
  } catch (error) {
    console.log(error)
    // console.log(data, "data");(error);
  } finally {
    dispatch(setLoadingWarehouseAction(false));
  }
};

export const getAllWarehouseAction = () => async (dispatch) => {
  try {
    const { data } = await API.get("/all");
    // console.log(data, "alllll");
    dispatch({ type: WAREHOUSE_ACTION_TYPE.GET_ALL_WAREHOUSE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createWarehouseAction = (warehouseData) => async (dispatch) => {
  dispatch(warehouseModalLoading(true));
  try {
    const { data } = await API.post("/", warehouseData);
    dispatch({ type: WAREHOUSE_ACTION_TYPE.CREATE_WAREHOUSE, payload: data });
    dispatch(warehouseModalOpen(false));
    dispatch(getWarehouseAction());
    toastSuccess("Yeni məhsul yarandı");
  } catch (error) {
    console.log(error);
    // console.log(data, "data");(error);
    if (error.response.data.key === "product-already-exists") {
      toastError("Bu adda məhsul mövcuddur");
    }
  } finally {
    dispatch(warehouseModalLoading(false));
  }
};

export const updateWarehouseAction =
  (_id, warehouseData) => async (dispatch) => {
    dispatch(warehouseModalLoading(true));
    try {
      const { data } = await API.patch(`/${_id}`, warehouseData);

      dispatch({ type: WAREHOUSE_ACTION_TYPE.UPDATE_WAREHOUSE, payload: data });
      dispatch(warehouseModalOpen(false));
      toastSuccess("Məhsul yeniləndi");
    } catch (error) {
      // console.log(data, "data");(error);
    } finally {
      dispatch(warehouseModalLoading(false));
    }
  };

export const deleteWarehouseAction = (_id) => async (dispatch) => {
  try {
    await API.delete(`/${_id}`);
    dispatch({ type: WAREHOUSE_ACTION_TYPE.DELETE_WAREHOUSE, payload: _id });
    toastSuccess("Məhsul silindi");
  } catch (error) {
    // console.log(data, "data");(error);
  }
};
