import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function InputField({
  tablesModalData,
  inputName,
  updateModalState
}) {

  const [shrink, setShrink] = useState(false);
  const inputData = [
    {
      inputName: "deposit",
      label: "Depozit",
      type: "number",
      marginTop: "0",
      marginBottom: "0",
      inputValue: tablesModalData[inputName] || "",
    },
    {
      inputName: "oneMinutePrice",
      label: "Dəqiqə başına qiymət",
      type: "number",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: tablesModalData[inputName] || "",
    },
    {
      inputName: "tableNumber",
      label: "Masa nömrəsi",
      type: "number",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: tablesModalData[inputName] || "",
    },
    {
      inputName: "name",
      label: "Masa Adı",
      type: "string",
      marginTop: "24px",
      marginBottom: "0",
      inputValue: tablesModalData[inputName] || "",
    },

  ];

  return (
    <>
    <TextField
      sx={{
        "& input": {
          fontSize: "12px",
          paddingRight: inputData.find((item) => item.inputName === inputName)
            ?.paddingRight,
        },
        marginTop: inputData.find((item) => item.inputName === inputName)
          .marginTop,
        marginBottom: inputData.find((item) => item.inputName === inputName)
          ?.marginBottom,
      }}
      InputLabelProps={{
        shrink:
          inputName === "date"
            ? true
            : inputData.find((item) => item.inputName === inputName)
                .inputValue
            ? true
            : shrink,
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
        if(inputName === "comment") {
          if(e.target.value.length <= 250) {
            updateModalState(inputName, e.target.value);
          } else {
            updateModalState(inputName, e.target.value.slice(0, 250));
          }
        } else {
          updateModalState(inputName, e.target.value);
        }
      }}
      onBlur={(e) => {
        setShrink(!!e.target.value);
      }}
      onFocus={() => setShrink(true)}
    />

    {inputName === "comment" &&  <div className="char-length">{inputData.find((item) => item.inputName === inputName)?.charLength} / 250</div>}
  </>
  );
}
