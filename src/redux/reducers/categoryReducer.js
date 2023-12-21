import { CATEGORY_ACTION_TYPE } from "../actions-type";

const initialState = {
  category: [],
  totalPages: 1,
  lastPage: "",
  loading: false,
  
};

export const categoryReducer = (state =initialState, action) => {
  switch (action.type) {
    case CATEGORY_ACTION_TYPE.GET_CATEGORY:
      return {
        ...state,
        category: action.payload.categories,
        totalPages:action.payload.totalPages
      };

    case CATEGORY_ACTION_TYPE.CREATE_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case CATEGORY_ACTION_TYPE.UPDATE_CATEGORY:
      return {
        ...state,
        category: state.category.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case CATEGORY_ACTION_TYPE.DELETE_CATEGORY:
      return {
        ...state,
        category: state.category.filter((item) => item._id !== action.payload),
      };
      case CATEGORY_ACTION_TYPE.CATEGORY_LOADING:
        return{
          ...state,
          loading:action.payload
        }
        case CATEGORY_ACTION_TYPE.GET_CATEGORY_LAST_PAGE:
          return{
            ...state,
            lastPage:action.payload
          }
          case CATEGORY_ACTION_TYPE.GET_BASE_CATEGORY:
            console.log(action.payload,"reducer")
            return{
              ...state,
              category:action.payload
            }
    default:
      return state;
  }
};
