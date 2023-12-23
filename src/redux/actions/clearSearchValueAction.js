import {  
    DATEPICKER_ACTION_TYPE, 
    SEARCH_VALUES_ACTION_TYPES,
    WAREHOUSE_FILTER_ACTION_TYPE,
  } from "../actions-type";


export const clearSearchValue=()=>{
    return(dispatch)=>{
    dispatch({type:SEARCH_VALUES_ACTION_TYPES.FINE_SEARCH_VALUE,payload:""})
    dispatch({type:SEARCH_VALUES_ACTION_TYPES.BONUS_SEARCH_VALUE,payload:""})
    dispatch({type:SEARCH_VALUES_ACTION_TYPES.FEEDBACK_SEARCH_VALUE,payload:""})
    dispatch({ type: DATEPICKER_ACTION_TYPE.START_DATE, payload: '' });
    dispatch({ type: DATEPICKER_ACTION_TYPE.END_DATE, payload: '' });
    dispatch({type:WAREHOUSE_FILTER_ACTION_TYPE.GET_WAREHOUSE_CATEGORY,payload:""})
    dispatch({type: SEARCH_VALUES_ACTION_TYPES.FEEDBACK_SEARCH_VALUE,payload: ""});
    dispatch({type:SEARCH_VALUES_ACTION_TYPES.STUDENT_FEEDBACK_SEARCH_VALUE,payload:""});
    dispatch({type:SEARCH_VALUES_ACTION_TYPES.WAREHOUSE_SEARCH_VALUE,payload:""})
    }
  }