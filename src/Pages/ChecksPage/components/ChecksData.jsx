import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import Loading from "../../../globalComponents/Loading/Loading";
import ChecksCard from "./ChecksCard";

const ChecksData = ({ menusPageNum, getPageNumber }) => {
  const { loading, totalPages } = useSelector((state) => state.checks);

  const { checks } = useSelector((state) => state.checks?.checks);

  const tableHead = [
    { id: 1, label: "Kateqoriya" },
    { id: 2, label: "Masa adı" },
    { id: 3, label: "Sifarişlər" },
    { id: 4, label: "Depozit" },
    { id: 6, label: "Ümumi məbləğ" },
    { id: 5, label: "Ümumi vaxt" },
    { id: 7, label: "1 dəq-lik qiymət" },
  ];

  // console.log(data, "data");(checks, "check");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table check-table">
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
