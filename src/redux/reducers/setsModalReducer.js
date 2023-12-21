import { SETS_M0DAL_ACTION_TYPE } from "../actions-type";

const initialState = {
  setsModalData: {
    products:"",
    price: "",
    name:""
  },
  setOpenModal: false,
  setModalLoading: false,
};

// {
//   product: "",
//   productCount: "",
//   productUnitAmount,
// }

export const setsModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETS_M0DAL_ACTION_TYPE.GET_SETS_MODAL:
      return {
        ...state,
        setsModalData: action.payload.data,
        setOpenModal: action.payload.openModal,
      };
    case SETS_M0DAL_ACTION_TYPE.SETS_OPEN_MODAL:
      return {
        ...state,
        setOpenModal: action.payload,
      };
      case SETS_M0DAL_ACTION_TYPE.SETS_MODAL_LOADING:
        return{
            ...state,
            setModalLoading:action.payload
        }
        default:
          return state;
  }
};
