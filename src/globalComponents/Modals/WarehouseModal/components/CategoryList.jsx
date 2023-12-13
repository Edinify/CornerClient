import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../../../redux/actions/categoryAction";

const CategoryLists = ({
  selectedCategoryName,
  categoryNameDropdown,
  categoryNameOpen,
  setCategoryNameOpen,
  categoryNameAddData,
  categoryList,
  formik,
}) => {
  const { dropdownName } = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeOpenDropdown = () => {
    if (!selectedCategoryName && dropdownName) {
    }
    setCategoryNameOpen(!categoryNameOpen);
  };

  useEffect(() => {
    dispatch(getCategoryAction(""));
  }, []);

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
            label="Kateqoriya "
            name="class"
            autoComplete="off"
            value={selectedCategoryName}
            onBlur={() => formik.setFieldTouched("category", true)}
            onClick={categoryNameDropdown}
          />
          <div className="dropdown-icon">
            <div onClick={changeOpenDropdown}>
              <svg
                className={!categoryNameOpen ? "down" : "up"}
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
            categoryNameOpen ? "active" : ""
          }`}
        >
          {categoryList?.map((item) => {
            return (
              <li key={item._id} onClick={() => categoryNameAddData(item)}>
                <h4>{item.name}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CategoryLists;
