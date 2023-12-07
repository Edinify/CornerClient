import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../workersPage.css";
import OrderPage from "../OrderPage";
import Loading from "../../../globalComponents/Loading/Loading";

const WorkersData = ({ orderModal, setOrderModal }) => {
  const { userTables,loading } = useSelector((state) => state.userTables);

  console.log(loading,"user loading")

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
        {loading ? 
        <Loading/>
        :
        <>
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
        </>
        }
        
      </div>
    </>
  );
};

export default WorkersData;