import { WAREHOUSE_ACTION_TYPE } from "../actions-type";

const initialState = {
  allWarehouses: [],
};

export const allWarehousesReducer = (state = initialState, action) => {
  switch (action.type) {
    case WAREHOUSE_ACTION_TYPE.GET_ALL_WAREHOUSE:
      return {
        ...state,
        allWarehouses: action.payload,
      };

    default:
      return state;
  }
};
