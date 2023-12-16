import { SETS_ACTION_TYPE } from "../actions-type";

const initialState = {
  menuSet:[],
  totalPages: 1,
  lastPage: "",
  loading: false,
};

export const setsReducer = (state=initialState, action) => {
  switch (action.type) {
    case SETS_ACTION_TYPE.GET_SETS:
      return {
        ...state,
        menuSet: action.payload.sets,
        totalPages: action.payload.totalPages,
      };
    case SETS_ACTION_TYPE.CREATE_SETS:
      return {
        ...state,
        menuSet:[...state.menuSet,action.payload.set],
        lastPage:action.payload.lastPage
      };
    case SETS_ACTION_TYPE.UPDATE_SETS:
      return {
        ...state,
        menuSet: state.menuSet.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case SETS_ACTION_TYPE.DELETE_SETS:
      return {
        ...state,
        menuSet: state.menuSet.filter((item) => item._id !== action.payload),
      };
    case SETS_ACTION_TYPE.SETS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SETS_ACTION_TYPE.GET_SETS_LAST_PAGE:
      return {
        ...state,
        lastPage: action.payload,
      };
      case SETS_ACTION_TYPE.ADD_SET_PRODUCTS:
        
    default:
      return state;
  }
};
