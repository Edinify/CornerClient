import { CHECK_ACTION_TYPE } from "../actions-type";

const initialState = {
  checks: [],
  totalPages:1,
  lastPage:"",
  loading:false
};

export const checkReducer = (state=initialState, action) => {
  switch (action.type) {
    case CHECK_ACTION_TYPE.GET_CHECK:
      return {
        ...state,
        checks: action.payload,
        totalPages:action.payload.totalPages,
        loading:false
      };
    case CHECK_ACTION_TYPE.CREATE_CHECK:
      return {
        ...state,
        checks: {...state.checks, ...action.payload},
      };
    case CHECK_ACTION_TYPE.UPDATE_CHECK:
      return {
        ...state,
        checks: state.checks.map((item) =>
          item._id === action.payload.id ? action.payload : item
        ),
      };
      case CHECK_ACTION_TYPE.GET_CHECK_LAST_PAGE:
        return{
          ...state,
          lastPage:action.payload
        }
        case CHECK_ACTION_TYPE.CHECK_LOADING:
          return{
            ...state,
            loading:action.payload
          }
    default:
      return state;
  }
};
