import { USER_AUTH_ACTION_TYPE } from "../actions-type";

const initialState = {
  userCode: {},
};

export const userCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_ACTION_TYPE.GET_ACCESS_CODE:
      return {
        ...state,
        userCode: action.payload,
      };
    case USER_AUTH_ACTION_TYPE.CREATE_ACCESS_CODE:
      // console.log(data, "data");(action.payload)
      return {
        ...state,
        userCode: { ...action.payload.accessCode},
      };
    default:
      return state;
  }
};
