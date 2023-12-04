import React, { useEffect } from "react";
import "./userCode.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../../redux/actions/userAuthAction";
import { USER_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";

const UserCodeModal = ({ openUserCode }) => {
  const dispatch = useDispatch();
  const { userCode } = useSelector((state) => state.userCode);

  console.log(userCode);

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const openModal = () => {
    dispatch({
      type: USER_M0DAL_ACTION_TYPE.GET_USER_MODAL,
      payload: { data: {}, openModal: true },
    });
  };

  return (
    <div className={`user-code-modal ${openUserCode ? "active" : ""}`}>
      <div className="user-code-modal-con">
        <div className="user-code-modal-content">
          <h2>İstifadəçi kodu</h2>
          <div className="user-code-bottom">
            <div className="user-code"></div>
            <p>{userCode.accessCode}</p>
            <div className="user-code-btn">
              <button onClick={openModal}>Yenilə</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCodeModal;
