import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckAction } from "../../../redux/actions/checkAction";

const OrderModal = ({
  setOpenOrderModal,
  setOrderModal,
  selectedTable,
  status,
  setStatus,
}) => {
  const { userCheck } = useSelector((state) => state.userCheck);
  const dispatch = useDispatch();

  const changeCheckStatus = () => {
    if (status === "confirm") {
      dispatch(
        updateCheckAction(userCheck._id, {
          ...userCheck,
          status: "confirmed",
        })
      );
    } else if (status === "cancel") {
      dispatch(
        updateCheckAction(userCheck._id, {
          ...userCheck,
          status: "cancelled",
        })
      );
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
              setOrderModal(false);
            }}
          >
            {status === "confirm" ? "Təstiqlə" : "Ləğv et"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
