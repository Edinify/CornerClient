import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  WAREHOUSE_M0DAL_ACTION_TYPE,
} from "../../../redux/actions-type";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { useDispatch, useSelector } from "react-redux";
import InputField from "./components/InputField";
import SubmitBtn from "./components/SubmitBtn";
import Category from "./components/Category";
import { useFormik } from "formik";
import { ValidationSchema } from "./components/ValidationSchema";
import CategoryLists from "./components/CategoryList";

export const WarehouseModal = () => {
  const dispatch = useDispatch();
  const { warehouseModalData } = useSelector((state) => state.warehouseModal);
  const inputArr = ["productName", "totalAmount"];
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // category list

  const { category } = useSelector((state) => state.category);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const categoryList = category?.filter((category) => category?.name);
  const [categoryNameOpen, setCategoryNameOpen] = useState(false);
  const [classIcon, setClassIcon] = useState(false);

  const selectedCategoryList = [
    { key: "kq", name: "kq" },
    { key: "litr", name: "litr" },
    { key: "ədəd", name: "ədəd" },
  ];


  const formik = useFormik({
    initialValues: {
      // productName: warehouseModalData?.productName
      //   ? warehouseModalData?.productName
      //   : "",
      totalAmount: warehouseModalData?.totalAmount
        ? warehouseModalData?.totalAmount
        : "",
    },
    validationSchema: ValidationSchema,
  });
  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  const categoryDropdown = () => {
    setCategoryOpen(!categoryOpen);
  };
  const categoryAddData = (item) => {
    setInputValue("category", item._id);
    updateModalState("unitMeasure", item.key);
    setCategoryOpen(false);
    setSelectedCategory(item);
  };

  useEffect(() => {
    if (warehouseModalData?._id) {
      if (warehouseModalData.unitMeasure) {
        setSelectedCategory({
          name: selectedCategoryList.filter(
            (item) => item.key === warehouseModalData.unitMeasure
          )[0]?.name,
        });
      }
    }
  }, []);

  const updateModalState = (keyName, value) => {
    dispatch({
      type: WAREHOUSE_M0DAL_ACTION_TYPE.GET_WAREHOUSE_MODAL,
      payload: {
        data: {
          ...warehouseModalData,
          [keyName]: value,
        },
        openModal: true,
      },
    });
  };
  const closeModal = () => {
    dispatch({
      type: WAREHOUSE_M0DAL_ACTION_TYPE.GET_WAREHOUSE_MODAL,
      payload: { data: {}, openModal: false },
    });
  };

  // category list

  const categoryNameAddData = (item) => {
    setInputValue("category", item._id);
    updateModalState("category", item);
    // dispatch({ type: DROPDOWN_NAME_ACTION_TYPE.GET_DROPDOWN, payload: item });
    setCategoryNameOpen(false);
    setSelectedCategoryName(item.name);
  };

  const categoryNameDropdown = () => {
    setCategoryNameOpen(!categoryNameOpen);
    setClassIcon(false);
  };

  useEffect(() => {
    if (warehouseModalData?._id) {
      if (warehouseModalData?.category) {
        setSelectedCategoryName(warehouseModalData.category.name);
      }
    }
  }, []);

  // console.log(selectedCategoryName, "selected category");

  return (
    <div className="create-update-modal-con bonus-modal">
      <div className="create-update-modal ">
        <div className="create-update-modal-head">
          <h2>
            {warehouseModalData?._id ? "Məhsul yenilə" : "Məhsul yaradın"}
          </h2>
          <CloseBtn onClick={closeModal} />
        </div>

        <Box
          onSubmit={(e) => e.preventDefault()}
          component="form"
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="create-update-modal-form">
            <CategoryLists
              setSelectedCategoryName={setSelectedCategoryName}
              selectedCategoryName={selectedCategoryName}
              categoryNameDropdown={categoryNameDropdown}
              categoryNameOpen={categoryNameOpen}
              setCategoryNameOpen={setCategoryNameOpen}
              categoryNameAddData={categoryNameAddData}
              categoryList={categoryList}
              formik={formik}
            />
            {inputArr.map((name, index) => (
              <InputField
                key={index}
                inputName={name}
                warehouseModalData={warehouseModalData}
                updateModalState={updateModalState}
                formik={formik}
                setInputValue={setInputValue}
              />
            ))}
            <Category
              selectedCategory={selectedCategory}
              categoryDropdown={categoryDropdown}
              categoryOpen={categoryOpen}
              selectedCategoryList={selectedCategoryList}
              categoryAddData={categoryAddData}
            />
          </div>
        </Box>

        {warehouseModalData?._id ? (
          <SubmitBtn
            funcType="update"
            warehouseModalData={warehouseModalData}
            closeModal={closeModal}
            formik={formik}
          />
        ) : (
          <SubmitBtn
            funcType="create"
            warehouseModalData={warehouseModalData}
            closeModal={closeModal}
            formik={formik}
          />
        )}
      </div>
    </div>
  );
};
