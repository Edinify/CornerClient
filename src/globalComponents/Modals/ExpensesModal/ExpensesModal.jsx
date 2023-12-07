import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { EXPENSES_MODAL_ACTION_TYPE } from "../../../redux/actions-type";
import InputField from "./components/InputField/InputField";
import SubmitBtn from "./components/SubmitBtn/SubmitBtn";
import {ValidationSchema} from "./components/ValidationSchema"
import { useFormik } from "formik";
export const ExpensesModal = () => {
  const dispatch = useDispatch();
  const inputNameArr = ["name","amount","price","date"];
  const { expensesModalData } = useSelector(
    (state) => state.expensesModal
  );
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const selectedCategoryList = [
    { key: "food", name: "Qida" },
    { key: "cleaningSupplies", name: "Təmizlik ləvazimatları " },
    { key: "repair", name: "Təmir" },
    { key: "lease", name: "İcarə" },
    { key: "equipment", name: "Avadanlıq" },
    {key :"other",name:"Digər"}
  ];

  const updateModalState = (keyName, value) => {
    dispatch({
      type: EXPENSES_MODAL_ACTION_TYPE.GET_EXPENSES_MODAL,
      payload: {
        data: { ...expensesModalData, [keyName]: value },
        openModal: true,
      },
    });
  };


  const formik = useFormik({
    initialValues: {
      name: expensesModalData?.name ? expensesModalData?.name : "",
      amount: expensesModalData?.amount
        ? expensesModalData?.amount
        : "",
      price: expensesModalData?.price ? expensesModalData?.price : "",
      date: expensesModalData?.date ? expensesModalData?.date : "",
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

  const closeModal = () => {
    dispatch({
      type: EXPENSES_MODAL_ACTION_TYPE.GET_EXPENSES_MODAL,
      payload: { data: {}, openModal: false },
    });
  };

 

  useEffect(() => {
    if (expensesModalData?._id) {
      if (expensesModalData.category) {
        setSelectedCategory({
          name: selectedCategoryList.filter(
            (item) => item.key === expensesModalData.category
          )[0]?.name,
        });
      }
    }
  }, []);


  return (
    <div className="create-update-modal-con">
      <div className="create-update-modal">
        <div className="create-update-modal-head">
          <h2>
            {expensesModalData?._id ? "Məhsulu yenilə" : "Məhsul yaradın"}
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
            {inputNameArr.map((name, index) => (
              <InputField
                key={index}
                inputName={name}
                expensesModalData={expensesModalData}
                updateModalState={updateModalState}
                formik={formik}
                setInputValue={setInputValue}
              />
            ))}
          </div>
        </Box>

        {expensesModalData?._id ? (
          <SubmitBtn
            funcType="update"
            expensesModalData={expensesModalData}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
            formik={formik}
          />
        ) : (
          <SubmitBtn
            funcType="create"
            expensesModalData={expensesModalData}
            closeModal={closeModal}
            setDeleteModal={setDeleteModal}
            formik={formik}

          />
        )}
      </div>
    </div>
  );
};