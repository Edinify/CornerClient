import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SEARCH_VALUES_ACTION_TYPES,
  WAREHOUSE_FILTER_ACTION_TYPE,
  WAREHOUSE_M0DAL_ACTION_TYPE,
} from "../../redux/actions-type";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import WarehouseData from "./components/WarehouseData";
import { getWarehouseAction } from "../../redux/actions/wareHouseAction";
import SearchDateFilter from "../../globalComponents/SearchDateFilter/SearchDateFilter";
import { clearSearchValue } from "../../redux/actions/clearSearchValueAction";

const WarehousePage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.warehouses);
  const { warehouseSearchValues } = useSelector((state) => state.searchValues);
  const [warehousePageNum, setWarehousePageNum] = useState(1);
  const { warehouses } = useSelector((state) => state.warehouses);
  const { wareCategory } = useSelector((state) => state.wareCategory);

  const category = warehouses.map((item) => item.category);

  console.log(category, "category");
  console.log(category._id, "category id");

  const { changeShowNav } = useCustomHook();

  const clearAll = () => {
    dispatch(clearSearchValue());

    dispatch(getWarehouseAction(1, "", ""));
    setWarehousePageNum(1);
  };

  const searchWarehouseData = (e) => {
    e.preventDefault();
    dispatch(
      getWarehouseAction(
        1,
        warehouseSearchValues,
        // wareCategory? wareCategory :""
        category._id ? category._id : ""
      )
    );
    setWarehousePageNum(1);
  };

  const applyFilterWarehouse = () => {
    dispatch(
      getWarehouseAction(
        1,
        warehouseSearchValues ? warehouseSearchValues : "",
        // wareCategory ? wareCategory : ""
        category._id ? category._id : ""
      )
    );
  };

  const changeSearcValuehWarehouse = (e) => {
    dispatch({
      type: SEARCH_VALUES_ACTION_TYPES.WAREHOUSE_SEARCH_VALUE,
      payload: e.target.value,
    });
  };

  const changeWarehouseType = (wareType) => {
    console.log(wareType, "type");
    dispatch({
      type: WAREHOUSE_FILTER_ACTION_TYPE.GET_WAREHOUSE_CATEGORY,
      payload: wareType.name,
    });
  };

  const openModal = () => {
    dispatch({
      type: WAREHOUSE_M0DAL_ACTION_TYPE.GET_WAREHOUSE_MODAL,
      payload: { data: {}, openModal: true },
    });
  };
  const getPageNumber = (pageNumber) => {
    setWarehousePageNum(pageNumber);
    dispatch(
      getWarehouseAction(
        pageNumber,
        warehouseSearchValues ? warehouseSearchValues : "",
        category._id ? category._id : ""
        // wareCategory ? wareCategory : ""
      )
    );
  };
  useEffect(() => {
    if (lastPage) {
      setWarehousePageNum(lastPage);
    }
  }, [lastPage]);

  useEffect(() => {
    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);

  return (
    <div className="details-page  ">
      <GlobalHead
        openModal={openModal}
        DATA_SEARCH_VALUE={"COURSES_SEARCH_VALUE"}
        dataSearchValues={warehouseSearchValues}
        statusType="courses"
      />

      <SearchDateFilter
        className="stimulation-search-head warehouse"
        clearAll={clearAll}
        applyFilter={applyFilterWarehouse}
        changeSearchValue={changeSearcValuehWarehouse}
        searchValue={warehouseSearchValues}
        searchData={searchWarehouseData}
        category={true}
        categoryData={category}
        changeCategory={changeWarehouseType}
      />
      <WarehouseData
        warehousePageNum={warehousePageNum}
        getPageNumber={getPageNumber}
      />
    </div>
  );
};

export default WarehousePage;
