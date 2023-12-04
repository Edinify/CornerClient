import { USER_M0DAL_ACTION_TYPE } from "../actions-type";

const initialState = {
  userModalData: {
    accessCode: "",
  },
  userOpenModal: false,
  userModalLoading: false,
};

export const UserModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_M0DAL_ACTION_TYPE.GET_USER_MODAL:
      return {
        ...state,
        userModalData: action.payload.data,
        userOpenModal: action.payload.openModal,
      };
    case USER_M0DAL_ACTION_TYPE.USER_OPEN_MODAL:
      return {
        ...state,
        userOpenModal: action.payload,
      };
      case USER_M0DAL_ACTION_TYPE.USER_MODAL_LOADING:
        return{
            ...state,
            userModalLoading:action.payload
        }
        default:
          return state;
  }
};
