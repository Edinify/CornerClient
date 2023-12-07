import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TABLES_M0DAL_ACTION_TYPE } from "../../redux/actions-type";
import { getTablesAction } from "../../redux/actions/tablesAction";
import TablesData from "./components/TablesData/TablesData";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";

const TablesPage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.tables);
  const { coursesSearchValues } = useSelector((state) => state.searchValues);
  const [tablePageNum, setTablePageNum] = useState(1);
  const { changeShowNav } = useCustomHook();

  const openModal = () => {
    dispatch({
      type: TABLES_M0DAL_ACTION_TYPE.GET_TABLES_MODAL,
      payload: { data: {}, openModal: true },
    });
  };
  const getPageNumber = (pageNumber) => {
    setTablePageNum(pageNumber);
    dispatch(getTablesAction(pageNumber));
  };

  useEffect(() => {
    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);
  useEffect(() => {
    if (lastPage) {
      setTablePageNum(lastPage);
    }
  }, [lastPage]);

  useEffect(() => {
    dispatch(getTablesAction(1));
  }, []);
  return (
    <div className="details-page courses ">
      <GlobalHead
        openModal={openModal}
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        dataSearchValues={coursesSearchValues}
        statusType="courses"
      />
      <TablesData tablePageNum={tablePageNum} getPageNumber={getPageNumber} />
    </div>
  );
};

export default TablesPage;
