import {  useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { Box } from "@mui/material";
import { CATEGORY_M0DAL_ACTION_TYPE, COURSES_MODAL_ACTION_TYPE } from "../../../redux/actions-type";
import { useFormik } from "formik";
import { ValidationSchema } from "./components/ValidationSchema";
import SubmitBtn from "./components/SubmitBtn";
// import Status from "./components/Status";
import InputField from "./components/InputField";
// import CategoryInput from "./components/CategoryInput";

export const CategoryModal = () => {
  const dispatch = useDispatch();
  const {categoryModalData} = useSelector(state=>state.categoryModal);


  // formik
  const formik = useFormik({
    initialValues: {
      name: categoryModalData?.name ? categoryModalData?.name : "",
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

  const updateModalState = (keyName, value) => {
    dispatch({
      type: CATEGORY_M0DAL_ACTION_TYPE.GET_CATEGORY_MODAL, 
      payload:{
        data: {...categoryModalData, [keyName]: value }, 
        openModal: true
      } })
  }
  const closeModal = () => {
    dispatch({ type: CATEGORY_M0DAL_ACTION_TYPE.GET_CATEGORY_MODAL, payload: { data: {}, openModal: false } });
  };


  const inputArr=["name"]
  



  return (
    <div className="create-update-modal-con">
      <div className="create-update-modal">
        <div className="create-update-modal-head">
          <h2>{categoryModalData?._id ? "Kateqoriya yenilə" : "Kateqoriya yaradın"}</h2>
          <CloseBtn onClick={closeModal} />
        </div>

        <Box
          onSubmit={e => e.preventDefault()}
          component="form"
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="create-update-modal-form">
          {inputArr.map((name, i) => (
              <InputField
                key={i}
                categoryModalData={categoryModalData}
                formik={formik}
                updateModalState={updateModalState}
                inputName={name}
              />
          ))}
            {/* <CategoryInput
              formik={formik}
              setInputValue={setInputValue}
              categoryModalData={categoryModalData}
              updateModalState={updateModalState}
            /> */}
          </div>
        </Box>

        {categoryModalData?._id ? (
          <SubmitBtn
            formik={formik}
            categoryModalData={categoryModalData}
            funcType="update"
            closeModal={closeModal}
          />
        ) : (
          <SubmitBtn
            formik={formik}
            categoryModalData={categoryModalData}
            funcType="create"
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};
