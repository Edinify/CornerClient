import React, { useState } from "react";
import "./searchDateFilter.css";
import { DatePick } from "../DatePicker/DatePicker";
import DatePickerModal from "../Modals/DatePickerModal/DatePickerModal";
import Search from "./components/Search";
import ApplyClearBtns from "./components/ApplyClearBtns";
import DatePickBtn from "../../globalComponents/DatePickBtn/DatePickBtn";
import CategoryDropdown from "./components/CategoryDropdown";
import { useLocation } from "react-router-dom";

const SearchDateFilter = ({
  className,
  clearAll,
  applyFilter,
  searchValue,
  changeSearchValue,
  searchData,
  category = false,
  categoryData,
  changeCategory = () => {},
}) => {
  const [datePickModal, setDatePickModal] = useState(false);
  const location = useLocation();

  return (
    <div className={className}>
      <div className="container">
        {location.pathname === "/checks" ? (
          <div
            className={`search-date-filter  ${
              category ? "category" : "none-category"
            }`}
          >
            <div className="right">
              <DatePick />
              <ApplyClearBtns clearAll={clearAll} applyFilter={applyFilter} />
              <DatePickBtn setDatePickModal={setDatePickModal} />
            </div>
            {datePickModal && (
              <DatePickerModal
                applyFilter={applyFilter}
                setDatePickModal={setDatePickModal}
                clearAll={clearAll}
              />
            )}
          </div>
        ) : (
          <div
            className={`search-date-filter  ${
              category ? "category" : "none-category"
            }`}
          >
            <div className="left">
              <Search
                searchData={searchData}
                changeSearchValue={changeSearchValue}
                searchValue={searchValue}
              />
              {category && (
                <CategoryDropdown
                  changeCategory={changeCategory}
                  categoryData={categoryData}
                />
              )}
            </div>
            <div className="right warehouse ">
              {category && (
                <CategoryDropdown
                  changeCategory={changeCategory}
                  categoryData={categoryData}
                />
              )}
              <ApplyClearBtns clearAll={clearAll} applyFilter={applyFilter} />
             {location.pathname==="/checks" && <DatePickBtn setDatePickModal={setDatePickModal} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDateFilter;
