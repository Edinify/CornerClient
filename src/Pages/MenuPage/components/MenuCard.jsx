import { deleteMenusAction } from "../../../redux/actions/menusAction";
import { useDispatch } from "react-redux";
import { MENU_M0DAL_ACTION_TYPE } from "../../../redux/actions-type";
import UpdateDeleteModal from "../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";

const MenuCard = ({ data, mode, cellNumber }) => {
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

  console.log(data,"data")

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
              <div className="table-scroll-text">
                {data.product?.productName}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">{data.category}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.price}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.unitAmount}</div>
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
                <p>
                  {data.product?.productName
                    ? data.product?.productName
                    : "boş"}
                </p>
              </li>
              <li>
                <span className="type">Kateqoriya:</span>
                <p>{data.category ? data.category : "boş"}</p>
              </li>
              <li>
                <span className="type">Məhsulun qiyməti:</span>
                <p>{data.price}</p>
              </li>
              <li>
                <span className="type">Miqdarı:</span>
                <p>{data.unitAmount}</p>
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

export default MenuCard;
