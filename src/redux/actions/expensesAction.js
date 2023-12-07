import axios from "axios";
import {
  EXPENSES_ACTION_TYPE,
  EXPENSES_MODAL_ACTION_TYPE,
} from "../actions-type";
import { toast } from "react-toastify";
import { apiRoot } from "../../apiRoot";

const API = axios.create({
  baseURL: `${apiRoot}/expense`,
   // withCredentials:true
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
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const setLoadingExpensesAction = (loadingValue) => ({
  type: EXPENSES_ACTION_TYPE.EXPENSES_LOADING,
  payload: loadingValue,
});

const expensesModalLoading = (loadingValue) => ({
  type: EXPENSES_MODAL_ACTION_TYPE.EXPENSES_MODAL_LOADING,
  payload: loadingValue,
});

const expensesModalOpen=(value)=>({
  type:EXPENSES_MODAL_ACTION_TYPE.EXPENSES_OPEN_MODAL,
  payload:value
})



export const getExpensesAction=(pageNumber)=> async(dispatch)=> {
  dispatch(setLoadingExpensesAction(true))
  
  try {
    const {data} = await API.get(`/?page=${pageNumber}`)
    dispatch({type:EXPENSES_ACTION_TYPE.GET_EXPENSES,payload:data})
    dispatch({type:EXPENSES_ACTION_TYPE.GET_EXPENSES_LAST_PAGE,payload:pageNumber})
  } catch (error) {
      // console.log(data, "data");(error)
  }
  finally{
    dispatch(setLoadingExpensesAction(false));
  }
}


export const createExpensesAction=(expensesData)=>async(dispatch)=>{
  dispatch(expensesModalLoading(true))
  try {
    const {data}  = await API.post("/",expensesData);
    dispatch({type:EXPENSES_ACTION_TYPE.CREATE_EXPENSES,payload:data})
    dispatch(getExpensesAction())
    dispatch(expensesModalOpen(false))
    dispatch({type:EXPENSES_MODAL_ACTION_TYPE.EXPENSES_MODAL_ACTIVATE_GET,payload:"create"})
    toastSuccess("Yeni mədaxil yaradıldı")
  } catch (error) {
    // console.log(data, "data");(error)
  }
  finally{
    dispatch(expensesModalLoading(false))
  }
}


export const updateExpensesAction=(_id,expensesData)=> async(dispatch)=>{
  dispatch(expensesModalLoading(true))
  try {
    const {data} = await API.patch(`/${_id}`,expensesData);
    dispatch({type:EXPENSES_ACTION_TYPE.UPDATE_EXPENSES,payload:data})
    dispatch({type:EXPENSES_MODAL_ACTION_TYPE.EXPENSES_MODAL_ACTIVATE_GET,payload:"update"})
    dispatch(expensesModalOpen(false))
    toastSuccess("Mədaxil yeniləndi")
  } catch (error) {
    // console.log(data, "data");(error)
  }
  finally{
    dispatch(expensesModalLoading(false))
  }
}

export const deleteExpensesAction=(_id)=>async(dispatch)=>{
  try {
      await API.delete(`/${_id}`)
      dispatch({type:EXPENSES_ACTION_TYPE.DELETE_EXPENSES,payload:_id})
      dispatch({type:EXPENSES_MODAL_ACTION_TYPE.EXPENSES_MODAL_ACTIVATE_GET,payload:"delete"})
      toastSuccess("mədaxil silindi")
  } catch (error) {
    // console.log(data, "data");(error)
  }
}