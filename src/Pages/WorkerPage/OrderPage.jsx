import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenusUserAction } from "../../redux/actions/menusAction";
import OrderModal from "../../globalComponents/Modals/OrderModal/OrderModal";
import {
  addOrderAction,
  addSetAction,
  createCheckAction,
  getCheckUserAction,
  removeOrderAction,
  removeSetAction,
  updateCheckAction,
} from "../../redux/actions/checkAction";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";
import { CHECK_ACTION_TYPE, USER_ACTION_TYPE } from "../../redux/actions-type";
import { toast } from "react-toastify";
import LoadingBtn from "../../globalComponents/Loading/components/LoadingBtn/LoadingBtn";
import { getMenuSetsForUser } from "../../redux/actions/setsAction";

const OrderPage = ({ selectedTable, setOrderModal }) => {
  const dispatch = useDispatch();
  const { menuUser } = useSelector((state) => state.menuUser);
  const { menuSet } = useSelector((state) => state.menuSet);
  const { userCheck } = useSelector((state) => state.userCheck);
  const { loading } = useSelector((state) => state.checkLoading);

  console.log(userCheck, "test bla bla bla");

  const [openOrderModal, setOpenOrderModal] = useState(false);
  // const [timeDifference, setTimeDifference] = useState(null);

  const [totalMin, setTotalMin] = useState(0);

  const [status, setStatus] = useState(null);

  const toastSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const listData = [
    { key: "Otağın depositi:", value: `${userCheck.table.deposit} AZN ` },
    {
      key: "1 saatlıq qiymət:",
      value: `${userCheck.table.oneMinutePrice || 0} AZN`,
    },
    { key: "Keçən müddət:", value: `${totalMin} dəqiqə` },
  ];

  const createOrder = () => {
    if (userCheck._id) {
      dispatch(updateCheckAction(userCheck._id, userCheck));
      toastSuccess("Sifariş yeniləndi");
    } else {
      dispatch(createCheckAction(userCheck));
      // dispatch({type:CHECK_ACTION_TYPE.CHECK_USER_LOADING,payload:true})
    }
  };

  const handleMenuClick = (order) => {
    dispatch(addOrderAction(order));
  };

  const removeOrder = (order) => {
    dispatch(removeOrderAction(order));
  };

  const addSet = (set) => {
    console.log(set);
    dispatch(addSetAction(set));
  };

  const removeSet = (set) => {
    dispatch(removeSetAction(set));
  };
  //
  useEffect(() => {
    dispatch(getMenusUserAction());
    dispatch(getMenuSetsForUser());
    if (selectedTable.checkId) {
      dispatch(getCheckUserAction(selectedTable.checkId));
    } else {
      dispatch({
        type: CHECK_ACTION_TYPE.UPDATE_USER_CHECK,
        payload: { table: selectedTable },
      });
    }
  }, []);
  console.log(menuSet);
  useEffect(() => {
    const calcMinute = () => {
      const currentDate = new Date();
      const createdDate = new Date(userCheck.createdAt);
      const diffTime = currentDate.getTime() - createdDate.getTime();
      const diffMinute = diffTime / (1000 * 60);
      return Math.floor(diffMinute);
    };

    if (userCheck?.createdAt) {
      // console.log(data, "data");(userCheck.createdAt);
      setTotalMin(calcMinute());

      const intervalId = setInterval(() => {
        // console.log(data, "data");("salam");
        setTotalMin(calcMinute());
      }, 60000);

      if (!userCheck.createdAt) {
        clearInterval(intervalId);
      }

      return () => clearInterval(intervalId);
    }
  }, [userCheck]);

  useEffect(() => {
    const deposit = userCheck.table.deposit;
    const oneMinutePrice = userCheck.table.oneMinutePrice / 60 || 0;

    // console.log(oneMinutePrice * 10);

    const ordersPrice =
      userCheck.orders.reduce(
        (total, item) => total + item.order.price * item.orderCount,
        0
      ) +
      parseFloat((oneMinutePrice * userCheck.totalDate).toFixed(2)) +
      parseFloat(
        userCheck.sets
          .reduce((total, item) => total + item.set.price * item.setCount, 0)
          .toFixed(2)
      );

    if (deposit && deposit > ordersPrice) {
      dispatch({
        type: CHECK_ACTION_TYPE.UPDATE_USER_CHECK,
        payload: { totalPayment: deposit },
      });
    } else {
      dispatch({
        type: CHECK_ACTION_TYPE.UPDATE_USER_CHECK,
        payload: { totalPayment: ordersPrice },
      });
    }
  }, [userCheck.orders, userCheck.table, userCheck.totalDate, userCheck.sets]);

  console.log(userCheck, "bla bla bla");
  return (
    <div className="order-page">
      <div className="order-page-container">
        <div className="order-side">
          <div className="order-side-container">
            <div className="order-side-head-container">
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
                    value={userCheck.totalDate}
                    onChange={(e) =>
                      dispatch({
                        type: CHECK_ACTION_TYPE.UPDATE_USER_CHECK,
                        payload: { totalDate: e.target.value },
                      })
                    }
                  />
                </div>
              </div>

              <div className="table-data-container">
                {listData.map((item) => (
                  <div key={item.key}>
                    {" "}
                    {item.key} {item.value}
                  </div>
                ))}
              </div>
            </div>

            <div className="product-order-container">
              <div className="product-list">
                {userCheck.orders.length > 0 && <b> Məhsullar </b>}
                <ul>
                  {userCheck.orders.map((item) => (
                    <li key={item.order._id}>
                      <span>
                        {item.order.product.productName} -{" "}
                        <div
                          style={{
                            color: "white",
                            backgroundColor: "#05a5ea",
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                          }}
                        >
                          <span>{item.orderCount}</span>
                        </div>{" "}
                        - {item.order?.price * item.orderCount}AZN {"   "}
                      </span>
                      <button
                        className="decrease-btn"
                        onClick={() => removeOrder(item.order)}
                      >
                        Azalt
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-list">
                {userCheck.sets.length > 0 && <b>Setlər</b>}
                {/* <ul>
                  {userCheck.sets.map((item) => {
                    return (
                      <li key={item.set._id}>
                        <span>
                          {item.set.name} -{" "}
                          <div
                            style={{
                              color: "white",
                              backgroundColor: "#05a5ea",
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                            }}
                          >
                            <span>{item.setCount}</span>
                          </div>{" "}
                          - {item.set.price * item.setCount}AZN {"   "}
                        </span>
                        <button
                          className="decrease-btn"
                          onClick={() => removeSet(item.set)}
                        >
                          Azalt
                        </button>
                      </li>
                    );
                  })}
                </ul> */}
                <div>
                  

                  {userCheck.sets.map((setItem) => (
                    <div className="sets-list" key={setItem.set._id}>
                      <li className="set-list"  >
                        <span>
                          Setin adı: {setItem.set.name} -{" "}
                          <div
                            style={{
                              color: "white",
                              backgroundColor: "#05a5ea",
                              display: "inline-flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "28px",
                              height: "28px",
                              borderRadius: "50%",
                            }}
                          >
                            <span>{setItem.setCount}</span>
                          </div>{" "}
                          - {setItem.set.price * setItem.setCount}AZN {"   "}
                        </span>
                        <button
                          className="decrease-btn"
                          onClick={() => removeSet(setItem.set)}
                        >
                          Azalt
                        </button>
                      </li>
                      <p>Setə daxildir:</p>
                      {setItem.set.products.map((productItem) => (
                        <p key={productItem._id}>
                          {productItem.product.productName}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
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

                <div className="total-price">
                  <p style={{ color: "white" }}>
                    Hesab: {userCheck.totalPayment} AZN{" "}
                  </p>
                </div>

                <div className="product-bottom-btns">
                  <button
                    className="open-table"
                    onClick={() => {
                      createOrder();
                      setOpenOrderModal(false);
                      // setOrderModal(false);
                    }}
                  >
                    {loading ? (
                      <LoadingBtn />
                    ) : userCheck._id ? (
                      "Yenilə"
                    ) : (
                      "Masa aç"
                    )}
                  </button>

                  {userCheck._id && (
                    <>
                      <button
                        className="confirm-table"
                        onClick={() => {
                          setOpenOrderModal(true);
                          setStatus("confirm");
                          // setOrderModal(false);
                        }}
                      >
                        Təsdiqlə
                      </button>
                      <button
                        className="cancel-table"
                        onClick={() => {
                          setOpenOrderModal(true);
                          setStatus("cancel");
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
          <br />
          <h1> Setlər </h1>
          <br />
          <div className="menus">
            {menuSet.map((set) => {
              // console.log(set)
              const { name, price } = set;
              return (
                <div
                  key={set._id}
                  className="menu-content"
                  onClick={() => addSet(set)}
                >
                  <span>{name}</span>
                  <p>
                    qiymət: <span>{price}</span> AZN
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {openOrderModal && (
        <OrderModal
          toastSuccess={toastSuccess}
          selectedTable={selectedTable}
          status={status}
          setStatus={setStatus}
          setOpenOrderModal={setOpenOrderModal}
          setOrderModal={setOrderModal}
        />
      )}
    </div>
  );
};

export default OrderPage;
