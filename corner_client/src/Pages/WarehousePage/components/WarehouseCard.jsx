import { useDispatch, useSelector } from "react-redux";
import { WAREHOUSE_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";
import { deleteWarehouseAction } from "../../../redux/actions/wareHouseAction";
import UpdateDeleteModal from "../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";
import { useEffect } from "react";

const WarehouseCard = ({ data, mode, cellNumber }) => {
  const dispatch = useDispatch();

  const updateItem = () => {
    const { productName, _id, totalAmount, unitMeasure } = data;
    dispatch({
      type: WAREHOUSE_M0DAL_ACTION_TYPE.GET_WAREHOUSE_MODAL,
      payload: {
        data: { productName, _id, totalAmount, unitMeasure },
        openModal: true,
      },
    });
  };
  const deleteItem = () => {
    dispatch(deleteWarehouseAction(data._id));
  };

  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data.productName}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">{data.totalAmount}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.unitMeasure}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td className="more-options">
            <UpdateDeleteModal
              updateItem={updateItem}
              deleteItem={deleteItem}
              data={data}
            />
          </td>
        </tr>
      ) : (
        <div className="content-box">
          <div className="left">
            <ul>
              <li>
                <span className="type">Məhsulun adı:</span>
                <p>{data.productName ? data.productName : "boş"}</p>
              </li>
              <li>
                <span className="type">Məhsulun miqdarı:</span>
                <p>{data.totalAmount ? data.totalAmount : "boş"}</p>
              </li>
              <li>
                <span className="type">Ölçü vahidi:</span>
                <p>{data.unitMeasure}</p>
              </li>
            </ul>
          </div>

          <div className="right">
            <UpdateDeleteModal
              updateItem={updateItem}
              deleteItem={deleteItem}
              data={data}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WarehouseCard;
