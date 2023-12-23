import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTablesUserAction } from "../../redux/actions/tablesAction";
import WorkersData from "./components/WorkersData";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import { CHECK_ACTION_TYPE } from "../../redux/actions-type";

const WorkersPage = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.orderModal);

  const { changeShowNav } = useCustomHook();
  useEffect(() => {
    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);

  useEffect(() => {
    if (!open) {
      dispatch({ type: CHECK_ACTION_TYPE.RESET_USER_CHECK });
      dispatch(getTablesUserAction());
    }
  }, [open]);
  return (
    <div className="details-page ">
      <WorkersData />
    </div>
  );
};

export default WorkersPage;
