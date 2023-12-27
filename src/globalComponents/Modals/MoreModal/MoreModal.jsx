import React from "react";
import { ReactComponent as CloseIcon } from "../../../assets/icons/more-modal/x-close.svg";
import "./moreModal.css";
import moment from "moment";

const MoreModal = ({ data, setOpenMoreModal }) => {
  let orders =
    Array.isArray(data.orders) && data.orders.length > 0
      ? data.orders
          .map((order) => {
            return `${order.order.product.productName} - ${order.orderCount}`;
          })
          .join(", ")
      : "";

  const moreData = [
    {
      key: "Masa adı və nömrəsi",
      value: `${data.table.name} -${data.table.tableNumber} `,
    },
    {
      key: "Masa növü",
      value: data.table.category,
    },
    {
      key: "Depozit",
      value: data.table.deposit ? `${data.table.deposit} AZN ` : "0 AZN" ,
    },
    {
      key: "1 saatlıq qiymət:",
       value: data.table.oneMinutePrice
      ? `${data.table.oneMinutePrice} AZN`
      : "0 AZN",
    
    },
    {
      key: "Ümumi məbləğ",
      value: data.totalPayment,
    },
    {
      key: "Ümumi vaxt ",
      value: data.totalDate,
    },
    {
      key: "Sifarişlər",
      value: orders,
    },
    {
      key: "Çekin yaranma tarixi",
      value: data.createdAt
      ? `${moment(data.createdAt).format("YYYY-MM-DD")}`
      : "boş",
    },
  ];
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
          {moreData.map(item=>(
            <h3>{item.key} : {item.value}</h3>
          ))}
          {/* <h3>Masa nömrəsi:{data.table.tableNumber}</h3>
          <h3>Masa növü: {data.table.category}</h3>
          <h3>Masa adı: {data.table.name}</h3>
          <h3>Depozit: {data.table.deposit ? data.table.deposit : "0"}AZN</h3>
          <h3>
            1 saatlıq qiymət:{" "}
            {data.table.oneMinutePrice ? data.table.oneMinutePrice : "0"}AZN
          </h3>
          <h3>Ümumi məbləğ :{data.totalPayment}AZN</h3>
          <h3>Ümumi vaxt : {data.totalDate}</h3>
          <h3>Sifarişlər :{orders} </h3>
          <h3>
            Çekin yaranma tarixi: {moment(data.createdAt).format("YYYY.MM.DD")}
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default MoreModal;
