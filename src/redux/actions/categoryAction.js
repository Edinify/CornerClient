import axios from "axios";
import {
  CATEGORY_ACTION_TYPE,
  CATEGORY_M0DAL_ACTION_TYPE,
} from "../actions-type";
import { apiRoot } from "../../apiRoot";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: `${apiRoot}/category`,
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

export const setLoadingCategoryAction = (loadingValue) => ({
  type: CATEGORY_ACTION_TYPE.CATEGORY_LOADING,
  payload: loadingValue,
});

const categoryModalLoading = (loadingValue) => ({
  type: CATEGORY_M0DAL_ACTION_TYPE.CATEGORY_MODAL_LOADING,
  payload: loadingValue,
});
const categoryModalOpen = (value) => ({
  type: CATEGORY_M0DAL_ACTION_TYPE.CATEGORY_OPEN_MODAL,
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

export const getCategoryAction = (pageNumber) => async (dispatch) => {
  dispatch(setLoadingCategoryAction(true));
  try {
    const { data } = await API.get(`/?page=${pageNumber}`);
    console.log(data)

    dispatch({
      type: CATEGORY_ACTION_TYPE.GET_CATEGORY_LAST_PAGE,
      payload: pageNumber,
    });
    dispatch({ type: CATEGORY_ACTION_TYPE.GET_CATEGORY, payload: data });
  } catch (error) {
  } finally {
    dispatch(setLoadingCategoryAction(false));
  }
};

export const getCategoryBaseAction = (categoryKey) => async (dispatch) => {
  console.log(categoryKey,"key")
  dispatch(setLoadingCategoryAction(true));
  try {
    const { data } = await API.get(`/all?categoryKey=${categoryKey}`);

    console.log(data,"base")

    dispatch({ type: CATEGORY_ACTION_TYPE.GET_BASE_CATEGORY, payload: data });
  } catch (error) {
  } finally {
    dispatch(setLoadingCategoryAction(false));
  }
};

export const createCategoryAction = (categoryData) => async (dispatch) => {
  dispatch(categoryModalLoading(true));
  try {
    const { data } = await API.post("/", categoryData);
    dispatch(categoryModalOpen(false));
    dispatch(getCategoryAction());

    toastSuccess("Yeni kateqoriya yaradıldl");
  } catch (error) {
    if ((error.response.data.key = "category-already-exists")) {
      toastError("Bu kateqoriya mövcuddur");
    }
    // console.log(data, "data");(error);
  } finally {
    dispatch(categoryModalLoading(false));
  }
};

export const updateCategoryAction = (_id, categoryData) => async (dispatch) => {
  dispatch(categoryModalLoading(true));

  try {
    const { data } = await API.patch(`/${_id}`, categoryData);
    dispatch({ type: CATEGORY_ACTION_TYPE.UPDATE_CATEGORY, payload: data });
    dispatch(categoryModalOpen(false));
    toastSuccess(" Kateqoriya yeniləndi");
  } catch (error) {
    // console.log(data, "data");(error);
  } finally {
    dispatch(categoryModalLoading(false));
  }
};

export const deleteCategoryAction = (_id) => async (dispatch) => {
  try {
    await API.delete(`/${_id}`);
    dispatch({ type: CATEGORY_ACTION_TYPE.DELETE_CATEGORY, payload: _id });
    toastSuccess(" Kateqoriya silinidi");
  } catch (error) {
    // console.log(data, "data");(error);
  }
};
