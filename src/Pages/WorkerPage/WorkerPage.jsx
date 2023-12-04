import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TABLES_M0DAL_ACTION_TYPE } from "../../redux/actions-type";
import { getTablesAction } from "../../redux/actions/tablesAction";
import WorkersData from "./components/WorkersData";
import GlobalHead from "../../globalComponents/GlobalHead/GlobalHead";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";

const WorkersPage = () => {
  const dispatch = useDispatch();
  const { lastPage } = useSelector((state) => state.tables);
  const { changeShowNav } = useCustomHook();

  useEffect(() => {
    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);


  useEffect(() => {
    dispatch(getTablesAction(1));
  }, []);
  return (
    <div className="details-page courses ">
      <WorkersData />
    </div>
  );
};

export default WorkersPage;
