import React, { useState } from "react";
import "./financeDataHead.css";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  EXPENSES_MODAL_ACTION_TYPE,
} from "../../../../redux/actions-type";
import { ReactComponent as PlusIcon } from "../../../../assets/icons/finance/Plus.svg";

const FinanceDataHead = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedType, setSelectedType] = useState("Mədaxil");


  const openModal = () => {
    dispatch({
      type:EXPENSES_MODAL_ACTION_TYPE.GET_EXPENSES_MODAL,payload:{
        data:{},openModal:true
      }
    })
  };
  return (
    <div className="finance-data-head">
      <div className="top">
        {/* <Link
          to="/finance/incomes"
          onClick={() => setSelectedType("Mədaxil")}
          className={`data-type ${
            location.pathname === "/finance/incomes" ? "active" : ""
          }`}
        >
          Mədaxil
        </Link> */}
        <Link
          to="/"
          onClick={() => setSelectedType("Xərc")}
          className={`data-type ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          Xərc
        </Link>
      </div>

      <div className="bottom">
        {/* <div className="left">
          <FinanceDropdown type='category'  />
          <FinanceDropdown type='sorting' />
        </div> */}

        <div className="right">
          <button className="add-btn" onClick={openModal}>
            <PlusIcon />
            Əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceDataHead;
