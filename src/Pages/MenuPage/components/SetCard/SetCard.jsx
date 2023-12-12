import { deleteSetAction } from "../../../../redux/actions/setsAction";
import { useDispatch } from "react-redux";
import UpdateDeleteModal from "../../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";
import { SETS_M0DAL_ACTION_TYPE } from "../../../../redux/actions-type";

const SetCard = ({ data, mode,cellNumber }) => {
  const dispatch = useDispatch();

  const updateItem = () => {
    const { products, _id,price } = data;
    dispatch({
      type: SETS_M0DAL_ACTION_TYPE.GET_SETS_MODAL,
      payload: {
        data: { products, _id, price },
        openModal: true,
      },
    });
  };
  const deleteItem = () => {
    dispatch(deleteSetAction(data._id));
  };

  console.log(data,"data")
  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              {/* <div className="table-scroll-text">{data.products.map(product=>(
                <div key={product._id} >
                  {product.name}
                </div>
              ))}</div> */}
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
              <div className="table-scroll-text phone">{data.price}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.price}</div>
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
                <span className="type">Məhsulun :</span>
                <p>{data.product?.productName ? data.product?.productName : "boş"}</p>
              </li>
              <li>
                <span className="type">Məhsulun sayı:</span>
                <p>{data.category ? data.category : "boş"}</p>
              </li>
              <li>
                <span className="type">	Məhsulun miqdarı:</span>
                <p>{data.price}</p>
              </li>
              <li>
                <span className="type">Məbləğ:</span>
                <p>{data.price}</p>
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

export default SetCard;
