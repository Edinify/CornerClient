import { CHECK_ACTION_TYPE } from "../actions-type";

const initialState={
    loading:false,
    submitLoading:false
}

export const checkLoadingReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHECK_ACTION_TYPE.CHECK_USER_LOADING:
            return{
                ...state,
                loading:action.payload,
                submitLoading:false,
            }
            case CHECK_ACTION_TYPE.CHECK_SUBMIT_LOADING:
                return{
                    ...state,
                    submitLoading:action.payload
                }
            default:
                return state;
    }
}