import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function InputField({
  warehouseModalData,
  inputName,
  updateModalState,
  // formik,
}) {

  const [shrink, setShrink] = useState(false);
  const inputData = [
    {
      inputName: "productName",
      label: "Məhsulun adı",
      type: "string",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: warehouseModalData[inputName] || "",
    },
    {
      inputName: "totalAmount",
      label: "Məhsulun miqdarı",
      type: "number",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: warehouseModalData[inputName] || "",
    },
   
 
  ];

  return (
    <>
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
            marginBottom: inputData.find((item) => item.inputName === inputName)
              .marginBottom,
          },
        }}
        fullWidth
        id={inputName}
        name={inputName}
        type={inputData.find((item) => item.inputName === inputName).type}
        label={inputData.find((item) => item.inputName === inputName).label}
        value={
          inputData.find((item) => item.inputName === inputName)?.inputValue
        }
        onWheel={(e) => e.target.blur()}
        onChange={(e) => {
          updateModalState(inputName, e.target.value)
          // setInputValue(inputName, e.target.value);
        }}
        onBlur={(e) => {
          // formik.setFieldTouched(inputName, true);
          setShrink(!!e.target.value);
        }}
        onFocus={() => setShrink(true)}
      />

    {inputName === "comment" &&  <div className="char-length">{inputData.find((item) => item.inputName === inputName)?.charLength} / 250</div>}
  </>
  );
}
