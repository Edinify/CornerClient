import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHOWNAV_ACTION_TYPE, COURSES_MODAL_ACTION_TYPE, TABLES_M0DAL_ACTION_TYPE } from "../../redux/actions-type";
import { getCoursesPaginationAction } from "../../redux/actions/coursesActions";
import {getTablesAction} from "../../redux/actions/tablesAction"
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
    if (coursesSearchValues) {
      dispatch(getCoursesPaginationAction(pageNumber, coursesSearchValues));
    } else {
      dispatch(getCoursesPaginationAction(pageNumber, ""));
    }
  };
  const searchData = (e) => {
    e.preventDefault();
    dispatch(getCoursesPaginationAction(1, coursesSearchValues));
    setTablePageNum(1);
  };

  useEffect(() => {
    if (coursesSearchValues) {
      dispatch(getCoursesPaginationAction(1, coursesSearchValues));
    } else {
      dispatch(getCoursesPaginationAction(1, ""));
    }

    changeShowNav(false)
    return () => {
      changeShowNav(true)
    };
  }, [dispatch]);
  useEffect(() => {
    if (lastPage) {
      setTablePageNum(lastPage);
    }
  }, [lastPage]);


  useEffect(()=>{
    dispatch(getTablesAction())
  },[])
  return (
    <div className="details-page courses ">
      <GlobalHead 
      searchData={searchData} 
      openModal={openModal} 
      DATA_SEARCH_VALUE={'COURSES_SEARCH_VALUE'} 
      dataSearchValues={coursesSearchValues}
      statusType="courses"
      />
      <TablesData tablePageNum={tablePageNum} getPageNumber={getPageNumber} />
    </div>
  );
};

export default TablesPage;
