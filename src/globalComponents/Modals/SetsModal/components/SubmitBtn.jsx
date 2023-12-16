import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingBtn from "../../../Loading/components/LoadingBtn/LoadingBtn";
import {
  createSetAction,
  updateSetAction,
} from "../../../../redux/actions/setsAction";

export default function SubmitBtn({ formik, setsModalData,selectedWarehouseName, funcType }) {
  const dispatch = useDispatch();
  const { menuModalLoading } = useSelector((state) => state.menuModal);
  const [isDisabled, setIsDisabled] = useState(() => {
    if (funcType === "update") {
      return false;
    } else {
      return true;
    }
  });

  // console.log(setsModalData, "data");

  const newSets = {
    product:setsModalData.product,
    productCount: setsModalData.productCount,
    productUnitAmount: setsModalData.productUnitAmount,
    price: setsModalData.price,
  };

  const classCreate = () => {
    if (setsModalData?._id) {
      dispatch(updateSetAction(setsModalData?._id, setsModalData));
    } else {
      dispatch(createSetAction(selectedWarehouseName));
    }
    // closeModal();
  };


  return (
    <div className="create-update-modal-btn">
      <button
        disabled={
          !(formik.isValid && !menuModalLoading)
        }
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
