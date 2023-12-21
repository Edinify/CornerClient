import React from "react";
import { ReactComponent as CloseIcon } from "../../../assets/icons/more-modal/x-close.svg";
import "./moreModal.css";

const MoreModal = ({ data, setOpenMoreModal }) => {
  let orders =
  Array.isArray(data.orders) && data.orders.length > 0
    ? data.orders
        .map((order) => {
          return `${order.order.product.productName} - ${order.orderCount}`;
        })
        .join(", ")
    : "";
  return (
    <div className="more-modal">
      <div className="more-modal-con">
        <div className="more-modal-header">
          <h2>Ümumi məlumat</h2>

          <div className="header-icon-close">
            <CloseIcon onClick={() => setOpenMoreModal(false)} />
          </div>
        </div>
        <div className="more-modal-data">
          <h3>Masa nömrəsi:{data.table.tableNumber}</h3>
          <h3>Masa növü: {data.table.category}</h3>
          <h3>Masa adı: {data.table.name}</h3>
          <h3>Depozit: {data.table.deposit ? data.table.deposit : "0"}AZN</h3>
          <h3>1 saatlıq qiymət: {data.table.oneMinutePrice ? data.table.oneMinutePrice:"0"}AZN</h3>
          <h3>Ümumi məbləğ :{data.totalPayment}AZN</h3>
          <h3>Ümumi vaxt : {data.totalDate}</h3>
          <h3>Sifarişlər :{orders} </h3>
        </div>
      </div>
    </div>
  );
};

export default MoreModal;
