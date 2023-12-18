import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllWarehouseAction } from "../../../../redux/actions/wareHouseAction";
import { ReactComponent as MinusIcon } from "../../../../assets/icons/minus-cirlce.svg";
import InputField from "./InputField";
import WareHouseInputField from "./WareHouseInputField";
const WarehouseLists = ({
  setSelectedWarehouseName,
  products,
  selectedWarehouseName,
  setCountData,
  countData,
  warehouseNameDropdown,
  warehouseNameOpen,
  setWarehouseNameOpen,
  warehouseNameAddData,
  warehousesList,
  formik,
  setInputValue,
  setsModalData,
  updateModalState,
}) => {
  const [searchedValue, setSearcherValue] = useState("");
  const { dropdownName } = useSelector((state) => state.dropdownName);
  const inputArr = ["productCount", "productUnitAmount"];
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const searchData = (e) => {
    setSearcherValue(e.target.value);
    // setSelectedWarehouseName("");
    setWarehouseNameOpen(true);
  };

  useEffect(() => {
    dispatch(getAllWarehouseAction());
  }, []);


  const changeOpenDropdown = () => {
    if (!selectedWarehouseName && dropdownName) {
    }
    setWarehouseNameOpen(!warehouseNameOpen);
  };

  const setFunction = (data) => {
    setSelectedWarehouseName({
      ...selectedWarehouseName,
      products: products.filter((set) => set.product !== data),
    });
    console.log(selectedWarehouseName);
  };
  // console.log(selectedWarehouseName)
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
              selectedWarehouseName
                ? selectedWarehouseName.productName
                : searchedValue
            }
            onChange={(e) => searchData(e)}
            onBlur={() => formik.setFieldTouched("product", true)}
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
              item.productName
                .toLowerCase()
                .includes(searchedValue.toLowerCase())
            )
            .map((item, i) => {
              return (
                <li key={i} onClick={() => warehouseNameAddData(item)}>
                  <h4>
                    {item.productName} <span> + </span>
                  </h4>
                </li>
              );
            })}
        </ul>
      </div>
      {products?.length > 0 && (
        <>
          {products.map((item, i) => {
            const { productCount, productUnitAmount } = item;
            return (
              <div key={i}>
                <div className="sets-product">
                  <h2>
                    {item.productName
                      ? item.productName
                      : item.product.productName}
                  </h2>
                  <MinusIcon onClick={() => setFunction(item.product)} />
                </div>
                {/* <div>
                    
                  </div> */}
                <div className="sets-product-inputs">
                  {inputArr.map((name, index) => (
                    <WareHouseInputField
                      setSelectedWarehouseName={setSelectedWarehouseName}
                      item={item}
                      products={products}
                      selectedWarehouseName={selectedWarehouseName}
                      setCountData={setCountData}
                      countData={countData}
                      value={
                        name === "productCount"
                          ? productCount
                          : name === "productUnitAmount"
                          ? productUnitAmount
                          : ""
                      }
                      // ---
                      key={index}
                      inputName={name}
                      setInputValue={setInputValue}
                      formik={formik}
                      setsModalData={setsModalData}
                      updateModalState={updateModalState}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default WarehouseLists;
