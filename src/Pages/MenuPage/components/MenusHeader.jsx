import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/icons/Plus.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  MENU_M0DAL_ACTION_TYPE, SETS_M0DAL_ACTION_TYPE,
} from "../../../redux/actions-type";

const MenusHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const openModal = () => {
    if (location.pathname === "/menus/menu") {
      dispatch({
        type: MENU_M0DAL_ACTION_TYPE.GET_MENU_MODAL,
        payload: { data: {}, openModal: true },
      });
     
    
    }
    else 
        dispatch({type:SETS_M0DAL_ACTION_TYPE.GET_SETS_MODAL,
          payload:{data:{},openModal:true}
        })
  };
  return (
    <div className="stimulation-head">
      <div className="stimulation-head-content ">
        <ul>
          <li>
            <Link
              to="/menus/menu"
              className={`data-type ${
                location.pathname === "/menus/menu" ? "active" : ""
              }`}
            >
              Təklər
            </Link>
          </li>

          <li>
            <Link
              to="/menus/set"
              className={`data-type ${
                location.pathname === "/menus/set" ? "active" : ""
              }`}
            >
              Setlər
            </Link>
          </li>
        </ul>
        <div className="add-stimul" onClick={openModal}>
          <PlusIcon />
          <h4>Əlavə et</h4>
        </div>
      </div>
    </div>
  );
};

export default MenusHeader;
