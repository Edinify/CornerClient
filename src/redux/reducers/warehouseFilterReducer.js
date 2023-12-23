import { WAREHOUSE_FILTER_ACTION_TYPE} from "../actions-type";

const initialState = {
  wareCategory: "",
};

export const warehouseFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case WAREHOUSE_FILTER_ACTION_TYPE.GET_WAREHOUSE_CATEGORY:
      return {
        ...state,
        wareCategory: action.payload,
      };
    default:
      return state;
  }
};
