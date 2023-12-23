import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../workersPage.css";
import OrderPage from "../OrderPage";
import Loading from "../../../globalComponents/Loading/Loading";
import { CHECK_ACTION_TYPE } from "../../../redux/actions-type";

const WorkersData = ({ orderModal, setOrderModal }) => {
  const { userTables, loading } = useSelector((state) => state.userTables);
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.orderModal);

  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableClick = (table) => {
    setSelectedTable(table);
  };

  return (
    <>
      <div className="tables-container">
        {selectedTable && open && <OrderPage selectedTable={selectedTable} />}
        {loading ? (
          <Loading />
        ) : (
          <>
            {userTables?.map((table) => (
              <div
                key={table._id}
                className={`table-box ${table.checkId ? "open" : ""}`}
              >
                <div
                  onClick={() => {
                    handleTableClick(table);
                    dispatch({
                      type: CHECK_ACTION_TYPE.ORDER_MODAL,
                      payload: true,
                    });
                  }}
                  className="table-box-container"
                >
                  <h3>{table.tableNumber}</h3>
                  <p>{table.name}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default WorkersData;
