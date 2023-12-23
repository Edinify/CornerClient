import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import TeacherCard from "./TeacherCard";
import { Pagination } from "antd";
import Loading from "../../../globalComponents/Loading/Loading";
import { WAREHOUSE_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";
import { getWarehouseAction } from "../../../redux/actions/wareHouseAction";
import WarehouseCard from "./WarehouseCard";
import { clearSearchValue } from "../../../redux/actions/clearSearchValueAction";

const WarehouseData = ({ warehousePageNum, getPageNumber }) => {
  const dispatch = useDispatch();
  const { warehouses, loading, totalPages } = useSelector(
    (state) => state.warehouses
  );
  const { warehouseSearchValues } = useSelector((state) => state.searchValues);

  useEffect(() => {
    if (warehouseSearchValues) {
      dispatch(getWarehouseAction(1, warehouseSearchValues, ""));
    } else {
      dispatch(getWarehouseAction(1, "", ""));
    }
    return()=>{
      dispatch(clearSearchValue())
    }
  }, []);

  const tableHead = [
    { id: 5, label: "Kateqoriya" },
    { id: 1, label: "Məhsulun adı" },
    { id: 3, label: "Məhsulun miqdarı" },
    { id: 2, label: "Ölçü vahidi" },
    { id: 4, label: "", type: "more-options-head" },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table warehouse-table ">
            <thead>
              <tr>
                {tableHead.map((head, i) => (
                  <th key={i} className={head.type ? head.type : ""}>
                    {head.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {warehouses.map((item, i) => (
                <WarehouseCard
                  key={item._id}
                  data={item}
                  mode="desktop"
                  cellNumber={i + 1 + (warehousePageNum - 1) * 10}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet with-more">
            {warehouses.map((item, i) => (
              <WarehouseCard
                key={item._id}
                data={item}
                mode="tablet"
                cellNumber={i + 1 + (warehousePageNum - 1) * 10}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={warehousePageNum}
                defaultCurrent={1}
                total={totalPages * 10}
                onChange={getPageNumber}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default WarehouseData;
