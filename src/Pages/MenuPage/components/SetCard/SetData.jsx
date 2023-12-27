import React, { useEffect } from "react";
import { getSetAction } from "../../../../redux/actions/setsAction";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import Loading from "../../../../globalComponents/Loading/Loading";
import SetCard from "./SetCard";

const SetData = ({ getMenuSetPageNumber, menuSetPageNum }) => {
  const dispatch = useDispatch();
  const { menuSet, loading, totalPages } = useSelector(
    (state) => state.menuSet
  );

  const tableHead = [
    { id: 1, label: "Məhsul və sayı" },
    { id: 5, label: "Setin adı" },
    { id: 3, label: "Məhsulun vahid miqdarı  " },
    { id: 4, label: "Məbləğ" },
    { id: 7, label: "", type: "more-options-head" },
  ];


  useEffect(() => {
    dispatch(getSetAction(1));
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table menu-table">
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
              {menuSet?.map((item, i) => (
                <SetCard
                  key={i}
                  data={item}
                  mode="desktop"
                  cellNumber={i + 1 + (menuSetPageNum - 1) * 10}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet with-more">
            {menuSet?.map((item, i) => (
              <SetCard
                key={i}
                data={item}
                mode="tablet"
                cellNumber={i + 1 + (menuSetPageNum - 1) * 10}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={menuSetPageNum}
                defaultCurrent={1}
                total={totalPages * 10}
                onChange={getMenuSetPageNumber}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SetData;
