import { deleteSetAction } from "../../../../redux/actions/setsAction";
import { useDispatch } from "react-redux";
import UpdateDeleteModal from "../../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";
import { SETS_M0DAL_ACTION_TYPE } from "../../../../redux/actions-type";

const SetCard = ({ data, mode, cellNumber }) => {
  const dispatch = useDispatch();


  const updateItem = () => {
    const { products, _id, price,name } = data;

    dispatch({
      type: SETS_M0DAL_ACTION_TYPE.GET_SETS_MODAL,
      payload: {
        data: { products, _id, price,name },
        openModal: true,
      },
    });
  };
  const deleteItem = () => {
    dispatch(deleteSetAction(data._id));
  };

  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">
                {data.products.map((product) => (
                  <div key={product._id}>{product.product.productName}</div>
                ))}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">
                {data.products.map((product) => {
                  // console.log(product.product.unitMeasure)
                  return(
                  <div key={product._id}>{product.productCount}</div>
                  )
                })}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.name}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">
                {data.products.map((product) => (
                  <div key={product._id}>{product.productUnitAmount}  / {product.product.unitMeasure}</div>
                ))}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.price} AZN</div>
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
                <span className="type">Məhsul :</span>
                <div className="table-scroll-text">
                  {data.products.map((product) => (
                    <p key={product._id}>{product.product.productName}</p>
                  ))}
                </div>
              </li>
              <li>
                <span className="type">Məhsulun sayı:</span>
                <div className="table-scroll-text">
                  {data.products.map((product) => (
                    <p key={product._id}>{product.productCount}</p>
                  ))}
                </div>
              </li>
              <li>
                <span className="type">Setin adı:</span>
                <p>{data.name}</p>
              </li>
              <li>
                <span className="type"> Məhsulun miqdarı:</span>
                <div className="table-scroll-text">
                  {data.products.map((product) => (
                    <p key={product._id}>{product.productUnitAmount}</p>
                  ))}
                </div>
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
