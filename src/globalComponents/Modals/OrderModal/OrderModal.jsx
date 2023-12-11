import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckAction } from "../../../redux/actions/checkAction";
import { toast } from "react-toastify";
import LoadingBtn from "../../Loading/components/LoadingBtn/LoadingBtn";
import { CHECK_ACTION_TYPE } from "../../../redux/actions-type";

const OrderModal = ({
  setOpenOrderModal,
  setOrderModal,
  selectedTable,
  status,
  setStatus,
  toastSuccess,
}) => {
  const { userCheck } = useSelector((state) => state.userCheck);
  const { submitLoading } = useSelector((state) => state.checkLoading);
  const dispatch = useDispatch();
  const changeCheckStatus = () => {
    if (status === "confirm") {
      dispatch(
        updateCheckAction(userCheck._id, {
          ...userCheck,
          status: "confirmed",
        })
      );
      toastSuccess("Sifariş təsdiqləndi");
    } else if (status === "cancel") {
      dispatch(
        updateCheckAction(userCheck._id, {
          ...userCheck,
          status: "cancelled",
        })
      );
      toastSuccess("Sifariş ləğv edildi");
    }
  };

  return (
    <div className="delete-modal">
      <div className="delete-container">
        <p>Təsdiqləmək istədiyinizə əminsiniz?</p>
        <div className="modal-btn">
          <button
            className="cancel-btn"
            onClick={() => {
              setOpenOrderModal(false);
              setStatus(null);
            }}
          >
            Geri
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              changeCheckStatus();
              setTimeout(() => {
                setOrderModal(false);
                dispatch({type: CHECK_ACTION_TYPE.CHECK_SUBMIT_LOADING,
                  payload: false,})
              }, 3000);
            }}
          >
            {submitLoading ? (
              <LoadingBtn />
            ) : status === "confirm" ? (
              "Təstiqlə"
            ) : (
              "Ləğv et"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
