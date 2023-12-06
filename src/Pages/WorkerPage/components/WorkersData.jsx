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
    dispatch(getCheckAction(1));
    dispatch(getCheckUserAction(""))
  }, []);

  console.log(userTables)

  return (
    <>
      <div className="tables-container">
        {userTables?.map((table) => (
          <div key={table._id} className={`table-box ${table.checkId ? "open" : ""}`}>
            <div
              onClick={() => {
                handleTableClick(table, "table");
                setOrderModal(true);
              }}
              className="table-box-container"
            >
              <h3>{table.tableNumber}</h3>
              <p>{table.name}</p>
            </div>
            {selectedOrderData && orderModal && (
              <OrderPage
                table={table}
                checks={checks}
                orderData={selectedOrderData}
                setOrderModal={setOrderModal}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkersData;
