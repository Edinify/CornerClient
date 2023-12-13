import { useDispatch, useSelector } from "react-redux";
import { WAREHOUSE_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";
import { deleteWarehouseAction } from "../../../redux/actions/wareHouseAction";
import UpdateDeleteModal from "../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";
import { useEffect } from "react";

const WarehouseCard = ({ data, mode, cellNumber }) => {
  const dispatch = useDispatch();

  const updateItem = () => {
    const { productName, _id, totalAmount, unitMeasure ,category} = data;
    dispatch({
      type: WAREHOUSE_M0DAL_ACTION_TYPE.GET_WAREHOUSE_MODAL,
      payload: {
        data: { productName, _id, totalAmount, unitMeasure,category },
        openModal: true,
      },
    });
  };
  const deleteItem = () => {
    dispatch(deleteWarehouseAction(data._id));
  };

  const listData=[
    {key:"Kateqoriya",value:data.category?.name ? data.category?.name : "boş"},
    {key:"Məhsulun adı",value:data.productName ? data.productName : "boş"},
    {key:"Məhsulun miqdarı",value:data.totalAmount ? data.totalAmount : "boş"},
    {key:"Ölçü vahidi",value:data.unitMeasure}
  ]


  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data.category?.name}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
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
            {listData.map((item, index) => (
                <li key={index}>
                  <span className="type">{item.key}:</span>
                  <p>{item.value}</p>
                </li>
              ))}
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
