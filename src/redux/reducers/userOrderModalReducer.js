import { CHECK_ACTION_TYPE } from "../actions-type";

const initialState = {
  open: false,
};

export const orderModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_ACTION_TYPE.ORDER_MODAL:
      return { ...state, open: action.payload };
    default:
      return state;
  }
};
