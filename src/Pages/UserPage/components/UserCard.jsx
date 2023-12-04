import {  useDispatch } from "react-redux";
import { USER_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";

const UserCard = ({ data, mode, cellNumber }) => {
  const dispatch = useDispatch();

  const updateItem = () => {
    const { accessCode, _id } = data;
    dispatch({
      type: USER_M0DAL_ACTION_TYPE.GET_USER_MODAL,
      payload: { data: { accessCode, _id }, openModal: true },
    });
  };
  



  return (
    <>
      {mode === "desktop" ? (
        <tr className="class-table">
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data?.accessCode}</div>
              <div className="right-fade"></div>
            </div>
          </td>

        </tr>
      ) : (
        <div className="content-box">
          <div className="left">
            <h3 className="name">{data.accessCode}</h3>
          </div>

    
        </div>
      )}
    </>
  );
};

export default UserCard;
