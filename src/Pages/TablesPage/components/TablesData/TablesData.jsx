import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TablesCard from "./TablesCard";
import { Pagination } from "antd";
import Loading from "../../../../globalComponents/Loading/Loading";
import { TABLES_M0DAL_ACTION_TYPE } from "../../../../redux/actions-type";

const TablesData = ({ tablePageNum, getPageNumber }) => {
  const { tables, loading, totalPages } = useSelector((state) => state.tables);

  const tableHead = [
    { id: 1, label: "Masa nömrəsi" },
    { id: 2, label: "Kateqoriya" },
    { id: 4, label: "Depozit" },
    { id: 5, label: "Dəqiqə başına qiymət" },
    { id: 7, label: "Masa adı" },
    { id: 3, label: "", type: "more-options-head" },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table teacher-table">
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
              {tables?.map((table, i) => (
                <TablesCard
                  key={i}
                  data={table}
                  mode="desktop"
                  cellNumber={i + 1 + (tablePageNum - 1) * 10}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet course-list-mobile">
            <h3 className="details-list-title">Masa nömrəsi</h3>
            {tables.map((table, i) => (
              <TablesCard
                key={i}
                data={table}
                mode="mobile"
                cellNumber={i + 1 + (tablePageNum - 1) * 10}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={tablePageNum}
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

export default TablesData;
