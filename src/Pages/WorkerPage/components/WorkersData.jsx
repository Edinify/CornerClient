import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../workersPage.css";
import OrderPage from "../OrderPage";

const WorkersData = () => {
  const { userTables } = useSelector((state) => state.userTables);

  const [orderModal, setOrderModal] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableClick = (table) => {
    setSelectedTable(table);
  };

  return (
    <>
      <div className="tables-container">
        {selectedTable && orderModal && (
          <OrderPage
            selectedTable={selectedTable}
            setOrderModal={setOrderModal}
          />
        )}
        {userTables?.map((table) => (
          <div
            key={table._id}
            className={`table-box ${table.checkId ? "open" : ""}`}
          >
            <div
              onClick={() => {
                handleTableClick(table);
                setOrderModal(true);
              }}
              className="table-box-container"
            >
              <h3>{table.tableNumber}</h3>
              <p>{table.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkersData;
