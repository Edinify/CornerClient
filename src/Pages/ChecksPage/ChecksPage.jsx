import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import { getCheckAction } from "../../redux/actions/checkAction";
import ChecksData from "./components/ChecksData";
import { DatePick } from "../../globalComponents/DatePicker/DatePicker";
import SearchDateFilter from "../../globalComponents/SearchDateFilter/SearchDateFilter";
import { clearSearchValue } from "../../redux/actions/clearSearchValueAction";

const ChecksPage = () => {
  const dispatch = useDispatch();
  const { startDate } = useSelector((state) => state.datepicker);
  const { endDate } = useSelector((state) => state.datepicker);
  const { lastPage } = useSelector((state) => state.checks);
  const [menusPageNum, setMenusPageNum] = useState(1);
  const { changeShowNav } = useCustomHook();

  console.log(startDate, "start");

  const clearAll = () => {
    dispatch(clearSearchValue());
    dispatch(getCheckAction(1, "", ""));
    setMenusPageNum(1);
  };
  const applyFilter = () => {
    dispatch(
      getCheckAction(1, startDate ? startDate : "", endDate ? endDate : "")
    );
  };

  const getPageNumber = (pageNumber) => {
    setMenusPageNum(pageNumber);
    dispatch(
      getCheckAction(
        pageNumber,
        startDate ? startDate : "",
        endDate ? endDate : ""
      )
    );
  };

  useEffect(() => {
    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);
  useEffect(() => {
    if (lastPage) {
      setMenusPageNum(lastPage);
    }
  }, [lastPage]);

  useEffect(() => {
    dispatch(getCheckAction(1,"",""));
  }, []);

  return (
    <div className="details-page courses ">
      <GlobalHead
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        statusType="check"
      />

      <SearchDateFilter
        className="stimulation-search-head"
        clearAll={clearAll}
        applyFilter={applyFilter}
      />

      <ChecksData menusPageNum={menusPageNum} getPageNumber={getPageNumber} />
    </div>
  );
};

export default ChecksPage;
