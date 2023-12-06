import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenusUserAction } from "../../redux/actions/menusAction";
import OrderModal from "../../globalComponents/Modals/OrderModal/OrderModal";
import {
  createCheckAction,
  getCheckUserAction,
} from "../../redux/actions/checkAction";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";

const OrderPage = ({table ,setOrderModal}) => {
  // console.log(table)
  const dispatch = useDispatch();
  const { menuUser } = useSelector((state) => state.menuUser);
  const { userCheck } = useSelector((state) => state.userCheck);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalMin, setTotalMin] = useState(0);
  const createOrder = (table) => {
    dispatch(
      createCheckAction({
        orders: selectedProducts,
        table: table,
        totalDate: totalMin,
      })
    );
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
  // console.log(table)
  useEffect(() => {
    dispatch(getMenusUserAction());

    if (table.checkId) {
      dispatch(getCheckUserAction(table.checkId));
    }
  }, []);
  let total = 0
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
                  <h4>Masa nömrəsi: {table.tableNumber}</h4>
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
                    {
                      selectedProducts?.map((item,i) =>{
                          // console.log(item)

                        return(
                          <li key={i}>
                            {item.order?.productName} - x{item.orderCount} -{" "}
                            {item.order?.totalAmount}
                            <span
                            >
                              Azalt
                            </span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                { userCheck?.orders !== undefined && userCheck.orders.map((item,i) =>{
                  const {orderCount} = item
                  const {productName,unitMeasure,totalAmount} = item.order
                  total += totalAmount * orderCount
                  console.log(total)
                  return(
                    <li key={i}>  {productName} <span>/ {orderCount} : {unitMeasure} </span>/ <b>{totalAmount} AZN</b> </li>
                  )
                })}
                <div className="product-price">
                  <p>Hesab: {total} AZN </p>
                  <button
                    onClick={() => {
                      createOrder([]);
                      setOpenOrderModal(true);
                    }}
                  >
                    Masa aç
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
