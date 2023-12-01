import { USER_AUTH_ACTION_TYPE } from "../actions-type";

const initialState = {
  userAuth: null,
  loading: false,
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_ACTION_TYPE.LOGIN_USER:
      return {
        ...state,
        userAuth: action.payload.data,
        loading: action.payload,
      };


    default:
      return state;
  }
};
