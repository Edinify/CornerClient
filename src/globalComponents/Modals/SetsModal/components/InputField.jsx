import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import moment from "moment";

export default function InputField({
  products,
  selectedWarehouseName,
  setsModalData,
  inputName,
  updateModalState,
  formik,
  setInputValue,
  setSelectedWarehouseName,
  item,
}) {
  // console.log(selectedWarehouseName)

  const [Data, setData] = useState({})
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
    {
      inputName: "price",
      label: "Məbləğ",
      type: "number",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: setsModalData[inputName] || "",
    },
 
  ];
  

  console.log(selectedWarehouseName)
  return (
    <div onClick={() => setData(item)}>
      
    <TextField
      sx={{
        "& input": { fontSize: "12px",
        paddingRight: inputData.find((item) => item.inputName === inputName)?.paddingRight },
        marginTop: inputData.find((item) => item.inputName === inputName).marginTop,
      }}
      InputLabelProps={{
        shrink:
          inputName === "birthday"
            ? true
            : (inputData.find((item) => item.inputName === inputName)
                .inputValue
            ? true
            : shrink),
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
      // value={item}
      onWheel={(e) => e.target.blur()}
      onChange={(e) => {  
        setSelectedWarehouseName(inputName, e.target.value)
        setInputValue(inputName, e.target.value);
        // inputName === inputData.sfind((item) => item.inputName === inputName) && console.log('1')
        inputName !=="price" ?
        setSelectedWarehouseName( 
          { ...selectedWarehouseName, products: [...products.map((data) =>{  
          return data =  data.productName === Data.productName && 
          inputName === "productCount" ?  
          {...data,  productCount : Number(e.target.value)}  :
          data.productName === Data.productName &&
          inputName === "productUnitAmount" ?
          {...data,  productUnitAmount : Number(e.target.value)} :
          data
          } )]} 
        ) :  setSelectedWarehouseName( {...selectedWarehouseName,
            price: Number(e.target.value)
          })
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
