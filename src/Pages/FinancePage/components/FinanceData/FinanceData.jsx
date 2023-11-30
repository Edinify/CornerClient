import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EXPENSES_ACTION_TYPE, INCOME_ACTION_TYPE } from "../../../../redux/actions-type";
import ExpensesData from "./ExpensesData/ExpensesData";

const FinanceData = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    financeMonthsFilter,
    financeChooseDate,
    financeIncomeCategory,
    financeIncomeSorting,
    financeExpenseCategory,
    financeExpenseSorting,
  } = useSelector((state) => state.financeDateFilter);
  const { lastPage: incomesLastPage } = useSelector((state) => state.incomes);
  const { lastPage: expensesLastPage } = useSelector(
    (state) => state.expensesData
  );
  const dataHead = [
    { id: 1, label: "Adı" },
    { id: 2, label: "Miqdarı" },
    { id: 3, label: "Məbləğ" },
    { id: 4, label: "Tarix" },
    { id: 6, label: "" },
  ];


  const getPageNumberExpenses = (pageNumber) => {
    if (financeChooseDate.startDate && financeChooseDate.endDate) {
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
    } else {
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
    }
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


  useEffect(() => {
    if (financeExpenseCategory || financeExpenseSorting) {
      getPageNumberExpenses(expensesLastPage);
    }
  }, [financeExpenseCategory, financeExpenseSorting]);

  // useEffect(() => {
  //   // page,
  //   // startDate,
  //   // endDate,
  //   // monthCount,
  //   // category

  //   dispatch(getExpensesPaginationAction(1, "", "", 1, "", "oldest"));
  // }, []);

  // console.log('months: ', financeMonthsFilter);
  // console.log('date: ', financeChooseDate);

  return (
    <div>
     

      
        <ExpensesData
          // expensesPageNum={expensesPageNum}
          getPageNumber={getPageNumberExpenses}
          page={"finance"}
          dataHead={dataHead}
        />
      
    </div>
  );
};

export default FinanceData;
