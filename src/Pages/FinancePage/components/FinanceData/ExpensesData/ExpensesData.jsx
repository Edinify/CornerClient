import React from "react";
import { useSelector } from "react-redux";
import ExpensesCard from "./ExpensesCard";
import { Pagination } from "antd";
import Loading from "../../../../../globalComponents/Loading/Loading";

const ExpensesData = ({  getPageNumber,  page, dataHead = [],expensesPageNum }) => {
  const { totalPages, loading,expensesData} = useSelector((state) => state.expensesData);
  const expensesHead = page !== 'finance' ? [
    { id: 1, label: " Təyinat" },
    {id:5,label:"Xərcin miqdarı"},
    { id: 2, label: "Xərcin miqdarı" },
    { id: 3, label: "Xərcin tarixi" },
    { id: 4, label: "" },
  ] : [...dataHead];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table expenses-table">
            <thead>
              <tr>
                {expensesHead.map((head, i) => (
                  <th key={i}>{head.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expensesData?.map((expense, i) => (
                <ExpensesCard
                  key={i}
                  data={expense}
                  mode="desktop"
                  cellNumber={i + 1 + (expensesPageNum - 1) * 10}
                  page={page}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet incomes-page ">
          {expensesData?.map((expense, i) => (
            <ExpensesCard
              key={i}
              data={expense}
              mode="tablet"
              cellNumber={i + 1 + (expensesPageNum - 1) * 10}
              page={page}
            />
          ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={expensesPageNum}
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

export default ExpensesData;
