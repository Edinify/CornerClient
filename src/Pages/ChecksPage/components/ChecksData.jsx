import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import Loading from "../../../globalComponents/Loading/Loading";
import ChecksCard from "./ChecksCard";

const ChecksData = ({ menusPageNum,getPageNumber }) => {
  const { loading, menus, totalPages } = useSelector((state) => state.menus);

  const {checks} = useSelector(state=>state.checks?.checks);
  console.log(checks,"check")

  const tableHead = [
    { id: 1, label: "Kateqoriya" },
    { id: 2, label: "Masa" },
    { id: 5, label: "Ümumi vaxt" },
  ];
  console.log(checks);
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
              {checks?.map((item, i) => (
                <ChecksCard
                  key={i}
                  data={item}
                  mode="desktop"
                  cellNumber={i + 1 + (menusPageNum - 1) * 10}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet with-more">
            {checks?.map((item, i) => (
              <ChecksCard
                key={i}
                data={item}
                mode="tablet"
                cellNumber={i + 1 + (menusPageNum - 1) * 10}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={menusPageNum}
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

export default ChecksData;
