import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenusAction } from "../../redux/actions/menusAction";

const OrderPage = ({ orderData,setOrderModal }) => {
  const dispatch = useDispatch();
  const { menus } = useSelector((state) => state.menus);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleMenuClick = (productName, price) => {
    const existingProduct = selectedProducts.find(
      (product) => product.name === productName
    );

    if (existingProduct) {
      setSelectedProducts((prevProducts) =>
        prevProducts.map(
          (product) => (
            console.log(product, "prodc"),
            product.name === productName
              ? { ...product, count: product.count + 1 }
              : product
          )
        )
      );
    } else {
      setSelectedProducts((prevProducts) => [
        ...prevProducts,
        { name: productName, count: 1, price: price },
      ]);
    }

    setTotalPrice((prevTotal) => prevTotal + price);
  };

  useEffect(() => {
    dispatch(getMenusAction());
  }, []);

  return (
    <div className="order-page">
      <div className="container">
        <div className="order-page-container">
          <div className="order-side">
            <div className="order-side-head">
              <h4>Masa nömrəsi: {orderData.tableNumber}</h4>
            </div>
            <div className="product-order-container">
            <div className="product-list">
              <ul>
                {selectedProducts.map((product) => (
                  <li key={product.name}>
                    {product.name} - x{product.count} - {product.price}
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-price">
              <p>Hesab: {totalPrice} AZN </p>
              <button onClick={()=>{
                setOrderModal(false)
              }} >Təsdiqlə</button>
            </div>
            </div>
          </div>
          <div className="menu-side">
            <div className="menus">
              {menus.map((menu) => (
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
    </div>
  );
};

export default OrderPage;
