import { TABLES_USER_ACTION_TYPE } from "../actions-type";

const initialState = {
  userTables: [],
};

export const userTablesReducer = (state=initialState, action) => {
  switch (action.type) {
    case TABLES_USER_ACTION_TYPE.GET_TABLES_USER:
      return {
        ...state,
        userTables: action.payload,
      };
    default:
      return state;
  }
};
