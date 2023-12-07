import { TABLES_USER_ACTION_TYPE } from "../actions-type";

const initialState = {
  userTables: [],
  loading:false
};

export const userTablesReducer = (state=initialState, action) => {
  switch (action.type) {
    case TABLES_USER_ACTION_TYPE.GET_TABLES_USER:
      return {
        ...state,
        userTables: action.payload,
      };
      case TABLES_USER_ACTION_TYPE.USER_TABLES_LOADING:
        return{
          ...state,
          loading:action.payload
        }
    default:
      return state;
  }
};
