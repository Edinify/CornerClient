import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import moment from "moment";

export default function InputField({
  menusModalData,
  inputName,
  updateModalState,
  formik,
  setInputValue
}) {

  const [shrink, setShrink] = useState(false);
  const inputData = [
    {
      inputName: "price",
      label: "Məhsulun qiyməti",
      type: "number",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: menusModalData[inputName] || "",
    },
    {
      inputName: "unitAmount",
      label: "Miqdarı",
      type: "number",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: menusModalData[inputName] || "",
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
          setInputValue(inputName, e.target.value);
        }}
        onBlur={(e) => {
          formik.setFieldTouched(inputName, true);
          setShrink(!!e.target.value);
        }}
        onFocus={() => setShrink(true)}
      />

    {inputName === "comment" &&  <div className="char-length">{inputData.find((item) => item.inputName === inputName)?.charLength} / 250</div>}
  </>
  );
}
