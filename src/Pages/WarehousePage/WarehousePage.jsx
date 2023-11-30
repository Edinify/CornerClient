import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WAREHOUSE_M0DAL_ACTION_TYPE } from "../../redux/actions-type";
import { getCoursesPaginationAction } from "../../redux/actions/coursesActions";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import WarehouseData from "./components/WarehouseData";
import { getWarehouseAction } from "../../redux/actions/wareHouseAction";

const WarehousePage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.warehouses);
  const { coursesSearchValues } = useSelector((state) => state.searchValues);
  const [warehousePageNum, setWarehousePageNum] = useState(1);
  const { changeShowNav } = useCustomHook();

  const openModal = () => {
    dispatch({
      type: WAREHOUSE_M0DAL_ACTION_TYPE.GET_WAREHOUSE_MODAL,
      payload: { data: {}, openModal: true },
    });
  };
  const getPageNumber = (pageNumber) => {
    setWarehousePageNum(pageNumber);
    if (coursesSearchValues) {
      dispatch(getCoursesPaginationAction(pageNumber, coursesSearchValues));
    } else {
      dispatch(getCoursesPaginationAction(pageNumber, ""));
    }
  };

  useEffect(() => {
    if (coursesSearchValues) {
      dispatch(getCoursesPaginationAction(1, coursesSearchValues));
    } else {
      dispatch(getCoursesPaginationAction(1, ""));
    }

    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);
  useEffect(() => {
    if (lastPage) {
      setWarehousePageNum(lastPage);
    }
  }, [lastPage]);


  useEffect(()=>{
    dispatch(getWarehouseAction())
  },[])

  return (
    <div className="details-page courses ">
      <GlobalHead
        openModal={openModal}
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        dataSearchValues={coursesSearchValues}
        statusType="courses"
      />
      <WarehouseData
        warehousePageNum={warehousePageNum}
        getPageNumber={getPageNumber}
      />
    </div>
  );
};

export default WarehousePage;
