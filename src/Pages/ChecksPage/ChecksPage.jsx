import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_M0DAL_ACTION_TYPE } from "../../redux/actions-type";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import { getMenusAction } from "../../redux/actions/menusAction";
import { getCheckAction } from "../../redux/actions/checkAction";
import ChecksData from "./components/ChecksData";

const ChecksPage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.checks);
  const [menusPageNum, setMenusPageNum] = useState(1);
  const { changeShowNav } = useCustomHook();


  const getPageNumber = (pageNumber) => {
    setMenusPageNum(pageNumber);
    dispatch(getCheckAction(pageNumber));
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
    dispatch(getCheckAction(1));
  }, []);

  return (
    <div className="details-page courses ">
      <GlobalHead
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        statusType="check"
      />
      <ChecksData menusPageNum={menusPageNum} getPageNumber={getPageNumber} />
    </div>
  );
};

export default ChecksPage;
