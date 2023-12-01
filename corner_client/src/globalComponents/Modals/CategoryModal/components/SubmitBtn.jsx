import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SEARCH_VALUES_ACTION_TYPES,
} from "../../../../redux/actions-type";
import LoadingBtn from "../../../Loading/components/LoadingBtn/LoadingBtn";
import { createCategoryAction, updateCategoryAction } from "../../../../redux/actions/categoryAction";

export default function SubmitBtn({
  formik,
  categoryModalData,
  funcType,
}) {
  const dispatch = useDispatch();
  const { categoryModalLoading } = useSelector((state) => state.categoryModal);
  const classCreate = () => {
    if (categoryModalData?._id) {
      dispatch(
        updateCategoryAction(categoryModalData?._id, categoryModalData)
      );
    } else {
      dispatch(createCategoryAction(categoryModalData));
    }
    // closeModal();
  };
  return (
    <div className="create-update-modal-btn">
      <button
        disabled={!(formik.isValid && categoryModalData?.name && !categoryModalLoading)}
        onClick={classCreate}
      >
        {categoryModalLoading ? (
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
