import { deleteMenusAction } from "../../../redux/actions/menusAction";
import { useDispatch } from "react-redux";
import { MENU_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";
import UpdateDeleteModal from "../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";

const ChecksCard = ({ data, mode,cellNumber }) => {
  const dispatch = useDispatch();

  const updateItem = () => {
    const { category, _id, product, price, unitAmount } = data;
    dispatch({
      type: MENU_M0DAL_ACTION_TYPE.GET_MENU_MODAL,
      payload: {
        data: { category, _id, product, unitAmount, price },
        openModal: true,
      },
    });
  };
  const deleteItem = () => {
    dispatch(deleteMenusAction(data._id));
  };
  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data.table?.category}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">{data.table?.name} <span>{data.table.tableNumber}</span></div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.totalDate}</div>
              <div className="right-fade"></div>
            </div>
          </td>
        </tr>
      ) : (
        <div className="content-box">
          <div className="left">
            <ul>
              <li>
                <span className="type">Kateqoriya :</span>
                <p>{data.table?.category ? data.table?.category : "boş"}</p>
              </li>
              <li>
                <span className="type">Masa:</span>
                <p>{data.table?.name? data.table?.name: "boş"} - {data.table.tableNumber}</p>
              </li>
              <li>
                <span className="type">Ümumi vaxt:</span>
                <p>{data.totalDate}</p>
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

export default ChecksCard;
