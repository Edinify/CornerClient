import { CATEGORY_M0DAL_ACTION_TYPE } from "../actions-type";

const initialState = {
  categoryModalData: {
    name: "",
  },
  categoryOpenModal: false,
  categoryModalLoading: false,
};

export const categoryModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_M0DAL_ACTION_TYPE.GET_CATEGORY_MODAL:
      return {
        ...state,
        categoryModalData: action.payload.data,
        categoryOpenModal: action.payload.openModal,
      };
    case CATEGORY_M0DAL_ACTION_TYPE.CATEGORY_OPEN_MODAL:
      return {
        ...state,
        categoryOpenModal: action.payload,
      };
      case CATEGORY_M0DAL_ACTION_TYPE.CATEGORY_MODAL_LOADING:
        return{
            ...state,
            categoryModalLoading:action.payload
        }
        default:
          return state;
  }
};
