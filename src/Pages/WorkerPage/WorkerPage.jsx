import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTablesUserAction } from "../../redux/actions/tablesAction";
import WorkersData from "./components/WorkersData";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";

const WorkersPage = () => {
  const dispatch = useDispatch();
  const { changeShowNav } = useCustomHook();
  useEffect(() => {
    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTablesUserAction());
  }, []);
  return (
    <div className="details-page ">
      <WorkersData />
    </div>
  );
};

export default WorkersPage;
