import React, {  useState } from "react";
import {  useSelector } from "react-redux";
import "../workersPage.css";
import OrderPage from "../OrderPage";

const WorkersData = () => {
  const { userTables } = useSelector((state) => state.userTables);

  const [orderModal, setOrderModal] = useState(false);
  const [selectedOrderData,setSelectedOrderData] = useState(null)

  const handleTableClick=(table)=>{
    setSelectedOrderData(table)
  }



  return (
    <>
      <div className="tables-container">
        {userTables?.map((table,i) => (
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
