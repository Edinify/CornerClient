import React from "react";
import "./globalHead.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/Plus.svg";
import { useDispatch } from "react-redux";
import { StatusDropdown } from "./StatusDropdown/StatusDropdown";
import Search from "./Search/Search";

const GlobalHead = ({
  openModal,
  DATA_SEARCH_VALUE,
  dataSearchValues,
  statusType,
  search = true,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="details-header">
      <div className="container">
        <div className="details-header-container">
          <div className="details-header-content">

           {statusType==="check"?
           ""
           :
           <button className="add-detail" onClick={openModal}>
              <PlusIcon />
              Əlavə et
            </button>
           } 
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalHead;
