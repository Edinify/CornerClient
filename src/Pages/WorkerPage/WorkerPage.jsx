import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTablesUserAction } from "../../redux/actions/tablesAction";
import WorkersData from "./components/WorkersData";
import { useCustomHook } from "../../globalComponents/GlobalFunctions/globalFunctions";
import { CHECK_ACTION_TYPE } from "../../redux/actions-type";

const WorkersPage = () => {
  const dispatch = useDispatch();
  const [orderModal, setOrderModal] = useState(false);
  const { changeShowNav } = useCustomHook();
  useEffect(() => {
    changeShowNav(false);
    return () => {
      changeShowNav(true);
    };
  }, [dispatch]);

  useEffect(() => {
    if (!orderModal) {
      dispatch(getTablesUserAction());
      dispatch({ type: CHECK_ACTION_TYPE.RESET_USER_CHECK });
    }
  }, [orderModal]);
  return (
    <div className="details-page ">
      <WorkersData orderModal={orderModal} setOrderModal={setOrderModal} />
    </div>
  );
};

export default WorkersPage;