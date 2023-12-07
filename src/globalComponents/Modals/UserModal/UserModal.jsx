import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CloseBtn } from "../../../assets/icons/Icon.svg";
import { Box } from "@mui/material";
import { USER_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";
import { useFormik } from "formik";
import { ValidationSchema } from "./components/ValidationSchema";
import SubmitBtn from "./components/SubmitBtn";
import InputField from "./components/InputField";

export const UserModal = () => {
  const dispatch = useDispatch();
  const { userModalData } = useSelector((state) => state.userModal);

  // formik
  const formik = useFormik({
    initialValues: {
      accessCode: userModalData?.accessCode ? userModalData?.accessCode : "",
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
      type: USER_M0DAL_ACTION_TYPE.GET_USER_MODAL,
      payload: {
        data: { ...userModalData, [keyName]: value },
        openModal: true,
      },
    });
  };
  const closeModal = () => {
    dispatch({
      type: USER_M0DAL_ACTION_TYPE.GET_USER_MODAL,
      payload: { data: {}, openModal: false },
    });
  };

  const inputArr = ["accessCode"];

  return (
    <div className="create-update-modal-con">
      <div className="create-update-modal">
        <div className="create-update-modal-head">
          <h2>
            {userModalData?._id ? "Kateqoriya yenilə" : "İstifadəçi kodu"}
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
          }}
        >
          <div className="create-update-modal-form">
            {inputArr.map((name, i) => (
              <InputField
                key={i}
                userModalData={userModalData}
                formik={formik}
                updateModalState={updateModalState}
                inputName={name}
              />
            ))}
          </div>
        </Box>

        <SubmitBtn
          formik={formik}
          userModalData={userModalData}
          funcType="create"
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};
