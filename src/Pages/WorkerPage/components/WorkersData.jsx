import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../workersPage.css";
import OrderPage from "../OrderPage";
import { getCheckAction, getCheckUserAction } from "../../../redux/actions/checkAction";

const WorkersData = () => {
  const { userTables } = useSelector((state) => state.userTables);
  const dispatch = useDispatch();

  const [orderModal, setOrderModal] = useState(false);
  const [selectedOrderData, setSelectedOrderData] = useState(null);

  const handleTableClick = (table) => {
    setSelectedOrderData(table)
    
  };
  const { checks, } = useSelector((state) => state.checks.checks);
  

  useEffect(() => {
    dispatch(getCheckAction());
    // dispatch(getCheckUserAction(""))
  }, []);

  console.log(orderModal)
  return (
    <>
      <div className="tables-container">
      {
        orderModal && <OrderPage table={selectedOrderData} setOrderModal={setOrderModal}  />
      }
        {userTables?.map((table, i) => {
          console.log(table.checkId);

          return(
              <div key={i} className={`table-box ${table.checkId ? "open" : ""}`}>
                1
                <div
                  onClick={() => {
                    console.log(table);
                    handleTableClick(table, "table");
                    setOrderModal(true);
                  }}
                  className="table-box-container"
                >
                  <h3>{table.tableNumber}</h3>
                  <p>{table.name}</p>
                </div>
              </div>
          )
          
          

        })}
        
      </div>
      
    </>
  );
};

export default WorkersData;
