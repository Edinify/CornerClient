import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  COURSES_MODAL_ACTION_TYPE,
  SEARCH_VALUES_ACTION_TYPES,
} from "../../../../redux/actions-type";
import {
  createMenusAction,
  updateMenusAction,
} from "../../../../redux/actions/menusAction";
import LoadingBtn from "../../../Loading/components/LoadingBtn/LoadingBtn";

export default function SubmitBtn({
  formik,
  menusModalData,
  funcType,
}) {
  const dispatch = useDispatch();
  const { menuModalLoading } = useSelector((state) => state.menuModal);
  const [isDisabled, setIsDisabled] = useState(() => {
    if (funcType === "update") {
      return false;
    } else {
      return true;
    }
  });




  useEffect(() => {
    setIsDisabled(() => {
      if (funcType === "update") {
        if (
          Object.keys(formik.errors).length === 0 &&
          menusModalData?.category
        ) {
          return false;
        } else if (
          Object.keys(formik.errors).length === 1 &&
          formik.errors.password === "Bu xana tələb olunur."
        ) {
          return false;
        } else {
          return true;
        }
      } else {
        if (formik.isValid && menusModalData?.category) {
          return false;
        } else {
          return true;
        }
      }
    });
  }, [formik.errors]);
  const classCreate = () => {
    if (menusModalData?._id) {
      dispatch(
        updateMenusAction(menusModalData?._id, menusModalData)
      );
    } else {
      dispatch({
        type: SEARCH_VALUES_ACTION_TYPES.COURSES_SEARCH_VALUE,
        payload: "",
      });
      dispatch(createMenusAction(menusModalData));
    }
    // closeModal();
  };
  return (
    <div className="create-update-modal-btn">
      <button
        disabled={!(formik.isValid && menusModalData?.unitAmount && !menuModalLoading)}
        onClick={classCreate}
      >
        {menuModalLoading ? (
          <LoadingBtn />
        ) : funcType === "update" ? (
          "Yenilə"
        ) : (
          "Yarat"
        )}
      </button>
    </div>
  );
}
