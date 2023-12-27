import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function WareHouseInputField({
  products,
  selectedWarehouseName,
  setsModalData,
  inputName,
  formik,
  setSelectedWarehouseName,
  item,
  value,
}) {
  const [Data, setData] = useState({});
  const [shrink, setShrink] = useState(false);



  const inputData = [
    {
      inputName: "productCount",
      label: "Məhsulun sayı",
      type: "number",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: setsModalData[inputName] || "",
    },
    {
      inputName: "productUnitAmount",
      label: "Məhsulun miqdarı",
      type: "number",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: setsModalData[inputName] || "",
    },
  ];
  return (
    <div
      onClick={() => setData(item)}
      style={{ width: "80%", display: "flex", justifyContent: "center" }}
    >
      <TextField
        sx={{
          "& input": {
            fontSize: "12px",
            paddingRight: inputData.find((item) => item.inputName === inputName)
              ?.paddingRight,
          },
          marginTop: inputData.find((item) => item.inputName === inputName)
            .marginTop,
        }}
        InputLabelProps={{
          shrink:
            inputName === "birthday"
              ? true
              : inputData.find((item) => item.inputName === inputName)
                  .inputValue
              ? true
              : shrink,
          style: {
            fontSize: "12px",
            color: "#3F3F3F",
            // marginBottom: inputData.find((item) => item.inputName === inputName)
            //   .marginBottom,
          },
        }}
        fullWidth
        required
        id={inputName}
        name={inputName}
        type={inputData.find((item) => item.inputName === inputName).type}
        label={inputData.find((item) => item.inputName === inputName).label}
        // value={
        //   selectedWarehouseName?.id ? inputName ==="price" ?
        //   selectedWarehouseName.price:
        //   inputName ==="name" ?
        //   selectedWarehouseName.name:'' :''
        // }
        value={value}
        onWheel={(e) => e.target.blur()}
        onChange={(e) => {
          inputName === "price"
            ? setSelectedWarehouseName({
                ...selectedWarehouseName,
                price: Number(e.target.value),
              })
            : inputName === "name"
            ? setSelectedWarehouseName({
                ...selectedWarehouseName,
                name: e.target.value,
              })
            : setSelectedWarehouseName({
                ...selectedWarehouseName,
                products: [
                  ...products.map((data) => {
                    return (data =
                      data.productName === Data.productName &&
                      inputName === "productCount"
                        ? { ...data, productCount: Number(e.target.value) }
                        : data.productName === Data.productName &&
                          inputName === "productUnitAmount"
                        ? { ...data, productUnitAmount: Number(e.target.value) }
                        : data);
                  }),
                ],
              });
          // : inputName ==="name" ?  setSelectedWarehouseName( {...selectedWarehouseName,
          //   name: e.target.value
          // }) :

          // setInputValue(inputName, e.target.value);
        }}
        onBlur={(e) => {
          formik.setFieldTouched(inputName, true);
          setShrink(!!e.target.value);
        }}
        onFocus={() => setShrink(true)}
      />
    </div>
  );
}
