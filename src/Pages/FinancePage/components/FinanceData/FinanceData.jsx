import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EXPENSES_ACTION_TYPE } from "../../../../redux/actions-type";
import ExpensesData from "./ExpensesData/ExpensesData";
import { getExpensesAction } from "../../../../redux/actions/expensesAction";

const FinanceData = () => {
  const dispatch = useDispatch();
  const { financeMonthsFilter, financeChooseDate } = useSelector(
    (state) => state.financeDateFilter
  );
  const { lastPage: expensesLastPage } = useSelector(
    (state) => state.expensesData
  );

  const [expensesPageNum, setExpensesPageNum] = useState(1);

  const getPageNumber = (pageNumber) => {
    setExpensesPageNum(pageNumber);
    dispatch(getExpensesAction(pageNumber));
  };

  const getDateFilteredExpenses = (pageNumber) => {
    dispatch({
      type: EXPENSES_ACTION_TYPE.GET_EXPENSES_LAST_PAGE,
      payload: pageNumber,
    });
    // dispatch(
    //   getExpensesPaginationAction(
    //     pageNumber,
    //     financeChooseDate.startDate,
    //     financeChooseDate.endDate,
    //     "", //month
    //     financeExpenseCategory
    //       ? financeExpenseCategory !== "all"
    //         ? financeExpenseCategory
    //         : ""
    //       : "",
    //     financeExpenseSorting ? financeExpenseSorting : "oldest"
    //   )
    // );
  };
  const getMonthFilteredExpenses = (pageNumber) => {
    dispatch({
      type: EXPENSES_ACTION_TYPE.GET_EXPENSES_LAST_PAGE,
      payload: pageNumber,
    });
    // dispatch(
    //   getExpensesPaginationAction(
    //     pageNumber,
    //     "",
    //     "",
    //     financeMonthsFilter ? financeMonthsFilter : 1, //month
    //     financeExpenseCategory
    //       ? financeExpenseCategory !== "all"
    //         ? financeExpenseCategory
    //         : ""
    //       : "",
    //     financeExpenseSorting ? financeExpenseSorting : "oldest"
    //   )
    // );
  };

  useEffect(() => {
    if (financeChooseDate?.startDate && financeChooseDate?.endDate) {
      getDateFilteredExpenses(expensesLastPage);
    }
  }, [financeChooseDate]);

  useEffect(() => {
    if (financeMonthsFilter) {
      getMonthFilteredExpenses(expensesLastPage);
    }
  }, [financeMonthsFilter]);

  return (
    <div>
      <ExpensesData
        getPageNumber={getPageNumber}
        page={"finance"}
        expensesPageNum={expensesPageNum}
      />
    </div>
  );
};

export default FinanceData;
