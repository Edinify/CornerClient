import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenusUserAction } from "../../redux/actions/menusAction";
import OrderModal from "../../globalComponents/Modals/OrderModal/OrderModal";
import {
  createCheckAction,
  getCheckUserAction,
} from "../../redux/actions/checkAction";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";

const OrderPage = ({ orderData, checks, setOrderModal, table }) => {
  const dispatch = useDispatch();
  const { menuUser } = useSelector((state) => state.menuUser);
  const { userCheck } = useSelector((state) => state.userCheck);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalMin, setTotalMin] = useState(0);
  // console.log(checks);
  const createOrder = (table) => {
    dispatch(
      createCheckAction({
        table: table,
        totalDate: totalMin,
        orders: [selectedProducts],
      })
    );
  };

  // const menuUserIds = menuUser.map((menu) => menu._id);
  // const userCheckIds = userCheck?.orders?.map((check) => check._id);
  // const commonIds = menuUserIds?.filter((_id) => userCheckIds?.includes(_id));
  
  // userCheck.orders.map((data) =>{
  //   console.log(data._id)
  //   menuUser.map((products) => {
  //     console.log(products.product._id) 
  //   })
  // })

 

  // const matchingProducts = menuUser?.filter((menu) =>
  //   commonIds?.includes(menu._id)
  // );

  const handleMenuClick = (productName, price, operation) => {
    const existingProduct = selectedProducts.find(
      (product) => product.name === productName
    );

    if (existingProduct) {
      setSelectedProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.name === productName
            ? {
                ...product,
                count:
                  operation === "decrease"
                    ? Math.max(0, product.count - 1)
                    : product.count + 1,
              }
            : product
        )
      );
    } else {
      setSelectedProducts((prevProducts) => [
        ...prevProducts,
        { name: productName, count: 1, price: price },
      ]);
    }

    setTotalPrice((prevTotal) =>
      operation === "decrease"
        ? Math.max(0, prevTotal - price)
        : prevTotal + price
    );
  };

  useEffect(() => {
    dispatch(getMenusUserAction());
    dispatch(getCheckUserAction(orderData.checkId));
  }, []);

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
                    {selectedProducts.map((product) => (
                      <li key={product.name}>
                        {product.name} - x{product.count} - {product.price}
                        <span
                          onClick={() =>
                            handleMenuClick(
                              product.name,
                              product.price,
                              "decrease"
                            )
                          }
                        >
                          Azalt
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {userCheck.orders ?
                  userCheck.orders.map((item) => (
                    <div key={item._id}>{item._id}</div>
                  ))
                  :null
                }
                <div className="product-price">
                  <p>Hesab: {totalPrice} AZN </p>
                  <button
                    onClick={() => {
                      createOrder(table);
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
                  onClick={() =>
                    handleMenuClick(menu.product.productName, menu.price)
                  }
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
