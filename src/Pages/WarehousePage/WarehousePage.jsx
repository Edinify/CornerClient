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
import { getCategoryAction } from "../../redux/actions/categoryAction";

const WarehousePage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.warehouses);
  const { warehouseSearchValues } = useSelector((state) => state.searchValues);
  const [warehousePageNum, setWarehousePageNum] = useState(1);
  const { category } = useSelector((state) => state.category);
  const { changeShowNav } = useCustomHook();
  const { wareCategory } = useSelector((state) => state.wareCategory);

  useEffect(() => {
    dispatch(getCategoryAction(1));
  }, []);

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
        wareCategory
          ? wareCategory !== "6586fcd50c32a92e17315180"
            ? wareCategory
            : ""
          : ""
      )
    );
    setWarehousePageNum(1);
  };

  const applyFilterWarehouse = () => {
    dispatch(
      getWarehouseAction(
        1,
        warehouseSearchValues ? warehouseSearchValues : "",
        wareCategory
          ? wareCategory !== "6586fcd50c32a92e17315180"
            ? wareCategory
            : ""
          : ""
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
      payload: wareType,
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
        wareCategory
          ? wareCategory !== "6586fcd50c32a92e17315180"
            ? wareCategory
            : ""
          : ""
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

  useEffect(() => {
    getPageNumber(1);
  }, [wareCategory]);

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
