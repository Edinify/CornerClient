import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SEARCH_VALUES_ACTION_TYPES,
} from "../../../../redux/actions-type";
import LoadingBtn from "../../../Loading/components/LoadingBtn/LoadingBtn";
import { createUserAction } from "../../../../redux/actions/userAuthAction";

export default function SubmitBtn({
  formik,
  userModalData,
  funcType,
}) {
  const dispatch = useDispatch();
  const { userModalLoading } = useSelector((state) => state.userModal);
  const classCreate = () => {
      dispatch(createUserAction(userModalData));
    // closeModal();
  };
  return (
    <div className="create-update-modal-btn">
      <button
        // disabled={!(formik.isValid && userModalData?.accessCode && !categoryModalLoading)}
        onClick={classCreate}
      >
        {userModalLoading ? (
          <LoadingBtn />
        ) : funcType === "update" ? (
          ""
        ) : (
          "Yenilə"
        )}
      </button>
    </div>
  );
}
