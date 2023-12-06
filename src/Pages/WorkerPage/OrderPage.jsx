import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenusUserAction } from "../../redux/actions/menusAction";
import OrderModal from "../../globalComponents/Modals/OrderModal/OrderModal";
import {
  addOrderAction,
  createCheckAction,
  getCheckUserAction,
  removeOrderAction,
  updateCheckAction,
} from "../../redux/actions/checkAction";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";
import { CHECK_ACTION_TYPE } from "../../redux/actions-type";
import { getTablesUserAction } from "../../redux/actions/tablesAction";

const OrderPage = ({ selectedTable, setOrderModal }) => {
  const dispatch = useDispatch();
  const { menuUser } = useSelector((state) => state.menuUser);
  const { userCheck } = useSelector((state) => state.userCheck);

  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalMin, setTotalMin] = useState(0);

  const createOrder = () => {
    console.log("salam 123");
    // dispatch(getTablesUserAction());
    if (selectedTable.checkId) {
      dispatch(updateCheckAction(selectedTable.checkId, userCheck));
    } else {
      dispatch(createCheckAction(userCheck));
    }
  };

  const handleMenuClick = (order) => {
    dispatch(addOrderAction(order));
  };

  const removeOrder = (order) => {
    console.log("remove ");
    dispatch(removeOrderAction(order));
  };

  const confirmCheck = () => {
    dispatch(
      updateCheckAction(selectedTable.checkId, {
        ...userCheck,
        status: "confirmed",
      })
    );
  };

  const cancelCheck = () => {
    dispatch(
      updateCheckAction(selectedTable.checkId, {
        ...userCheck,
        status: "cancelled",
      })
    );
  };

  useEffect(() => {
    dispatch(getMenusUserAction());

    if (selectedTable.checkId) {
      dispatch(getCheckUserAction(selectedTable.checkId));
    } else {
      dispatch({
        type: CHECK_ACTION_TYPE.UPDATE_USER_CHECK,
        payload: { table: selectedTable },
      });
    }
  }, []);

  useEffect(() => {
    const totalPrice =
      userCheck.orders.reduce(
        (total, item) => total + item.order.price * item.orderCount,
        0
      ) +
      (userCheck.table.deposit || 0) +
      (userCheck.table.oneMinutePrice || 0) * totalMin;
    setTotalPrice(totalPrice);
  }, [userCheck]);

  console.log(menuUser, "salam");

  return (
    <div className="order-page">
      <div className="order-page-container">
        <div className="order-side">
          <div className="order-side-container">
            <div className="order-side-head">
              <div className="order-side-content">
                <div className="back" onClick={() => setOrderModal(false)}>
                  <BackIcon />
                </div>
                <h4>Masa nömrəsi: {selectedTable.tableNumber}</h4>
              </div>
              <div className="order-side-input">
                <input
                  type="number"
                  value={totalMin}
                  onChange={(e) => setTotalMin(e.target.value)}
                />
              </div>
            </div>

            <div className="product-order-container">
              <div className="product-list">
                <ul>
                  {userCheck.orders.map((item) => (
                    <li key={item.order._id}>
                      {item.order.product.productName} - {item.orderCount}{" "}
                      {item.order.product.unitMeasure} -
                      {item.order?.price * item.orderCount}AZN {"   "}
                      <span
                        onClick={() => removeOrder(item.order)}
                        style={{
                          cursor: "pointer",
                          border: "1px solid red",
                          borderRadius: "10px",
                        }}
                      >
                        Azalt
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {userCheck?.data?.orders
                ? userCheck?.data?.orders.map((item) => (
                    <ul key={item.order._id}>
                      <li>{item.order.productName}</li>
                    </ul>
                  ))
                : null}
              <div className="product-bottom-container">
                {/* <div className="product-price"> */}

                <p>Hesab: {totalPrice} AZN </p>
                <div className="product-bottom-btns">
                  <button
                    className="open-table"
                    onClick={() => {
                      createOrder(selectedTable);
                      // setOrderModal(false);
                    }}
                  >
                    {selectedTable.checkId ? "Yenilə" : "Masa aç"}
                  </button>
                  {selectedTable.checkId && (
                    <>
                      <button
                        className="confirm-table"
                        onClick={() => {
                          confirmCheck();
                          setOpenOrderModal(true);
                          // setOrderModal(false);
                        }}
                      >
                        Təsdiqlə
                      </button>
                      <button
                        className="cancel-table"
                        onClick={() => {
                          cancelCheck();
                          setOpenOrderModal(true);
                          // setOrderModal(false);
                        }}
                      >
                        Ləğv et
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-side">
          <div className="menus">
            {menuUser.map((order) => (
              <div
                key={order._id}
                className="menu-content"
                onClick={() => handleMenuClick(order)}
              >
                <span>{order.product.productName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {openOrderModal && (
        <OrderModal
          setOpenOrderModal={setOpenOrderModal}
          setOrderModal={setOrderModal}
        />
      )}
    </div>
  );
};

export default OrderPage;
