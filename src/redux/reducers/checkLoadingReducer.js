import { CHECK_ACTION_TYPE } from "../actions-type";

const initialState={
    loading:true
}

export const checkLoadingReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHECK_ACTION_TYPE.CHECK_USER_LOADING:
            return{
                ...state,
                loading:action.payload
            }
            default:
                return state;
    }
}