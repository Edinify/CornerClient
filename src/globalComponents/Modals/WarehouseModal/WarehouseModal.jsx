import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { WAREHOUSE_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { useDispatch, useSelector } from "react-redux";
import InputField from "./components/InputField";
import SubmitBtn from "./components/SubmitBtn";
import Category from "./components/Category";
import { useFormik } from "formik";
import { ValidationSchema } from "./components/ValidationSchema";

export const WarehouseModal = () => {
  const dispatch = useDispatch();
  const { warehouseModalData } = useSelector((state) => state.warehouseModal);
  const { category } = useSelector((state) => state.category);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const inputArr = ["productName", "totalAmount"];
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectedCategoryList = [
    { key: "kq", name: "kq" },
    { key: "litr", name: "litr" },
    { key: "ədəd", name: "ədəd" },
  ];

  const formik = useFormik({
    initialValues: {
      productName: warehouseModalData?.productName
        ? warehouseModalData?.productName
        : "",
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

  // useEffect(() => {
  //   if (warehouseModalData?.id ) {
  //     if (warehouseModalData.unitMeasure) {
  //       setSelectedCategoryName(
  //         category.filter((item) => item.id === warehouseModalData.unitMeasure)[0]
  //       );
  //     }
  //   }
  // }, [category]);

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
            setDeleteModal={setDeleteModal}
            formik={formik}

          />
        ) : (
          <SubmitBtn
            funcType="create"
            warehouseModalData={warehouseModalData}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
            formik={formik}

          />
        )}
      </div>
    </div>
  );
};
