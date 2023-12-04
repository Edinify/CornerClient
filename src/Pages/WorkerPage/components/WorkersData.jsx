import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import Loading from "../../../globalComponents/Loading/Loading";
import { TABLES_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";
import "./workersPage.css";
import OrderPage from "../OrderPage";

const WorkersData = () => {
  const { tables } = useSelector((state) => state.tables);

  const [orderModal, setOrderModal] = useState(false);
  const [selectedOrderData,setSelectedOrderData] = useState(null)

  const handleTableClick=(table)=>{
    setSelectedOrderData(table)
  }

  return (
    <>
      <div className="tables-container">
        {tables.map((table,i) => (
          <div key={i}  className="table-box">
            <div  onClick={()=>{
                handleTableClick(table)
                setOrderModal(true)}} className="table-box-container">
              <h3  >{table.tableNumber}</h3>
            </div>
          </div>
        ))}
      </div>
      {
        selectedOrderData && orderModal && <OrderPage orderData={selectedOrderData} setOrderModal={setOrderModal}  />
      }
    </>
  );
};

export default WorkersData;
