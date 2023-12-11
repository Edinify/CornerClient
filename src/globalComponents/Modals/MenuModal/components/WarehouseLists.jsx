import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getWarehouseAction } from "../../../../redux/actions/wareHouseAction";

const WarehouseLists = ({
    setSelectedWarehouseName,
    selectedWarehouseName,
    warehouseNameDropdown,
    warehouseNameOpen,
    setWarehouseNameOpen,
    warehouseNameAddData,
    warehousesList,
    formik
}) => {
  const [searchedValue, setSearcherValue] = useState("");
  const { dropdownName } = useSelector((state) => state.dropdownName);
  const dispatch = useDispatch()


  const searchData = (e) => {
    setSearcherValue(e.target.value);
    setSelectedWarehouseName("");
    setWarehouseNameOpen(true);
  };

  useEffect(()=>{
    dispatch(getWarehouseAction())
  },[])


  const changeOpenDropdown = () => {
    if (!selectedWarehouseName && dropdownName) {
    }
    setWarehouseNameOpen(!warehouseNameOpen);
  };


  return (
    <>
      <div className="class-input">
        <div className="class-field">
          <TextField
            sx={{
              "& input": {
                fontSize: "12px",
                marginRight: "32px",
              },
              marginTop: "20px",
            }}
            InputLabelProps={{
              style: { fontSize: "12px", color: "#3F3F3F" },
            }}
            fullWidth
            label="Məhsulun adı "
            name="class"
            autoComplete="off"
            value={
              selectedWarehouseName ? selectedWarehouseName.productName : searchedValue
            }
            onChange={(e) => searchData(e)}
            onBlur={() => formik.setFieldTouched('product', true)}
            onClick={warehouseNameDropdown}
          />
          <div className="dropdown-icon">
            
              <div onClick={changeOpenDropdown}>
                <svg
                  className={!warehouseNameOpen ? "down" : "up"}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.92 9.4502L13.4 15.9702C12.63 16.7402 11.37 16.7402 10.6 15.9702L4.07999 9.4502"
                    stroke="#5D5D5D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
          </div>
        </div>

        <ul
          className={`create-update-modal-dropdown where-coming ${
            warehouseNameOpen ? "active" : ""
          }`}
        >
          {warehousesList
            ?.filter((item) =>
              item.productName.toLowerCase().includes(searchedValue.toLowerCase())
            )
            .map((item, i) => {
              return (
                <li key={i} onClick={() => warehouseNameAddData(item)}>
                  <h4>{item.productName}</h4>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default WarehouseLists;
