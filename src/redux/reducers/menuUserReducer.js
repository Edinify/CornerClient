import { MENU_USER_ACTION_TYPE } from "../actions-type";

const initialState = {
  menuUser: [],
};

export const menuUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_USER_ACTION_TYPE.GET_MENU_USER:
      return {
        ...state,
        menuUser: action.payload,
      };
    default:
      return state;
  }
};
