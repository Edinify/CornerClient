import { CHECK_ACTION_TYPE } from "../actions-type";

const initialState = {
  userCheck: {
    table: {},
    orders: [],
    sets: [],
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
      // // console.log(data, "data");(action.payload)
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
    // ------
    case CHECK_ACTION_TYPE.ADD_SET_ACTION: {
      const checkSet = state.userCheck.sets.find(
        (item) => item.set._id === action.payload._id
      );

      let newSets;

      if (checkSet) {
        newSets = state.userCheck.sets.map((item) =>
          item.set._id === action.payload._id
            ? { ...item, setCount: item.setCount + 1 }
            : item
        );
      } else {
        newSets = [
          ...state.userCheck.sets,
          { set: action.payload, setCount: 1 },
        ];
      }
      console.log(action.payload);
      return {
        ...state,
        userCheck: { ...state.userCheck, sets: newSets },
      };
    }
    case CHECK_ACTION_TYPE.REMOVE_SET_ACTION: {
      const currentSet = state.userCheck.sets.find(
        (item) => item.set._id === action.payload._id
      );

      let newSets;
      if (currentSet.setCount > 1) {
        newSets = state.userCheck.sets.map((item) =>
          item.set._id === action.payload._id
            ? { ...item, setCount: item.setCount - 1 }
            : item
        );
      } else {
        newSets = state.userCheck.sets.filter(
          (item) => item.set._id !== action.payload._id
        );
      }

      return {
        ...state,
        userCheck: { ...state.userCheck, sets: newSets },
      };
    }
    // -------
    case CHECK_ACTION_TYPE.RESET_USER_CHECK: {
      return {
        userCheck: {
          table: {},
          orders: [],
          sets: [],
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
