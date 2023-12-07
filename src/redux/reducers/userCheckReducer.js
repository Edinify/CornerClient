import { CHECK_ACTION_TYPE } from "../actions-type";

const initialState = {
  userCheck: {
    table: {},
    orders: [],
    totalDate: 0,
    totalPayment: 0,
    status: "open",
  },
  loading: false,
};

export const userCheckReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_ACTION_TYPE.CREAT_USER_CHECK:
      return {
        userCheck: action.payload,
      };
    case CHECK_ACTION_TYPE.GET_USER_CHECK:
      // console.log(action.payload)
      return {
        ...state,
        userCheck: { ...state.userCheck, ...action.payload },
      };

    case CHECK_ACTION_TYPE.UPDATE_USER_CHECK:
      return {
        ...state,
        userCheck: { ...state.userCheck, ...action.payload },
      };
    case CHECK_ACTION_TYPE.ADD_ORDER_ACTION: {
      const checkOrder = state.userCheck.orders.find(
        (item) => item.order._id === action.payload._id
      );

      let newOrders;

      if (checkOrder) {
        newOrders = state.userCheck.orders.map((item) =>
          item.order._id === action.payload._id
            ? { ...item, orderCount: item.orderCount + 1 }
            : item
        );
      } else {
        newOrders = [
          ...state.userCheck.orders,
          { order: action.payload, orderCount: 1 },
        ];
      }

      return {
        ...state,
        userCheck: { ...state.userCheck, orders: newOrders },
      };
    }
    case CHECK_ACTION_TYPE.REMOVE_ORDER_ACTION: {
      const currentOrder = state.userCheck.orders.find(
        (item) => item.order._id === action.payload._id
      );

      let newOrders;

      if (currentOrder.orderCount > 1) {
        newOrders = state.userCheck.orders.map((item) =>
          item.order._id === action.payload._id
            ? { ...item, orderCount: item.orderCount - 1 }
            : item
        );
      } else {
        newOrders = state.userCheck.orders.filter(
          (item) => item.order._id !== action.payload._id
        );
      }

      return {
        ...state,
        userCheck: { ...state.userCheck, orders: newOrders },
      };
    }
    case CHECK_ACTION_TYPE.RESET_USER_CHECK: {
      return {
        userCheck: {
          table: {},
          orders: [],
          totalDate: 0,
          totalPayment: null,
          status: "open",
        },
      };
    }
    default:
      return state;
  }
};