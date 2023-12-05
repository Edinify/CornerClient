import { CHECK_ACTION_TYPE } from "../actions-type"

const initialState={
    userCheck:{}
}

export const userCheckReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHECK_ACTION_TYPE.GET_USER_CHECK:
            // console.log(action.payload)
            return{
              ...state,
              userCheck:action.payload
            }
            default:
                return state;
    }
}