import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenusUserAction } from "../../redux/actions/menusAction";
import OrderModal from "../../globalComponents/Modals/OrderModal/OrderModal";
import {
  createCheckAction,
  getCheckUserAction,
  updateCheckAction,
} from "../../redux/actions/checkAction";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";

const OrderPage = ({ orderData, checks, setOrderModal }) => {
  const dispatch = useDispatch();
  const { menuUser } = useSelector((state) => state.menuUser);
  const { userCheck } = useSelector((state) => state.userCheck);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalMin, setTotalMin] = useState(0);
  const createOrder = (table) => {
    if (orderData.checkId) {
      dispatch(
        updateCheckAction(orderData.checkId, {
          orders: selectedProducts,
          table: orderData,
          totalDate: totalMin,
          totalPrice:totalPrice
        })
      );
    } else {
      dispatch(
        createCheckAction({
          orders: selectedProducts,
          table: orderData,
          totalDate: totalMin,
          totalPrice:totalPrice,
        })
      );
    }
  };
  useEffect(() => {
    const totalPrice = selectedProducts.reduce(
      (total, item) => total + item.order.totalAmount * item.orderCount,
      0
    );
    setTotalPrice(totalPrice);
  }, [selectedProducts]);

  const handleMenuClick = (product) => {
    const existingProduct = selectedProducts.find(
      (item) => item.order._id === product._id
    );

    if (existingProduct) {
      setSelectedProducts(
        selectedProducts.map((item) =>
          item.order._id == product._id
            ? { ...item, orderCount: item.orderCount + 1 }
            : item
        )
      );
    } else {
      setSelectedProducts([
        ...selectedProducts,
        { order: product, orderCount: 1 },
      ]);
    }
  };


  useEffect(() => {
    dispatch(getMenusUserAction());

    if (orderData.checkId) {
      dispatch(getCheckUserAction(orderData.checkId));
    }
  }, []);

  console.log(orderData, 'order table')

  return (
    <div className="order-page">
      <div className="container">
        <div className="order-page-container">
          <div className="order-side">
            <div className="order-side-container">
              <div className="order-side-head">
                <div className="order-side-content">
                  <div className="back" onClick={() => setOrderModal(false)}>
                    <BackIcon />
                  </div>
                  <h4>Masa nömrəsi: {orderData.tableNumber}</h4>
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
                    {selectedProducts.map((item) => (
                        <li key={item.order._id}>
                          {item.order?.productName} - x{item.orderCount} -{" "}
                          {item.order?.totalAmount}
                          <span
                          // onClick={() =>
                          //   handleMenuClick(
                          //     item
                          //   )
                          // }
                          >
                            Azalt
                          </span>
                        </li>
                    ))}
                  </ul>
                </div>
                {userCheck?.data?.orders
                  ? userCheck?.data?.orders.map(item=>(
                    <ul key={item._id} >
                      <li>{item.order.productName}</li>
                    </ul>
                  ))
                :null}
                <div className="product-price">
                  <p>Hesab: {totalPrice} AZN </p>
                  <button
                    onClick={() => {
                      createOrder(orderData);
                      setOpenOrderModal(true);
                      setOrderModal(false);
                    }}
                  >
                    {orderData.checkId ? "Yenilə" : "Masa aç"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-side">
            <div className="menus">
              {menuUser.map((menu) => (
                <div
                  key={menu._id}
                  className="menu-content"
                  onClick={() => handleMenuClick(menu.product)}
                >
                  <span>{menu.product.productName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* {openOrderModal && (
        <OrderModal
          setOpenOrderModal={setOpenOrderModal}
          setOrderModal={setOrderModal}
        />
      )} */}
    </div>
  );
};

export default OrderPage;
