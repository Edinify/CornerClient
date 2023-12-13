import { useSelector, useDispatch } from "react-redux";
import { TABLES_M0DAL_ACTION_TYPE } from "../../../../redux/actions-type";
import { deleteTablesAction } from "../../../../redux/actions/tablesAction";
import UpdateDeleteModal from "../../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";

const TablesCard = ({ data, mode, cellNumber }) => {
  const dispatch = useDispatch();


  const updateItem = () => {
    const { category, deposit, oneMinutePrice, tableNumber, name, _id } = data;
    dispatch({
      type: TABLES_M0DAL_ACTION_TYPE.GET_TABLES_MODAL,
      payload: {
        data: { category, deposit, oneMinutePrice, tableNumber, name, _id },
        openModal: true,
      },
    });
  };
  const deleteItem = () => {
    dispatch(deleteTablesAction(data._id));
  };

  const listData=[
    {key:"Masa nömrəsi",value:data.tableNumber},
    {key:"Kateqoriya",value:data.category ? data.category : "boş"},
    {key:"Depozit",value:data.deposit ? data.deposit : 0},
    {key:"Saat başına qiymət",value:data.oneMinutePrice ? data.oneMinutePrice : 0},
    {key:"Masa adı",value:data.name}
  ]

  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              {/* <div className="cell-number">{cellNumber}.</div> */}
              <div className="table-scroll-text">{data.tableNumber}</div>
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
              <div className="table-scroll-text phone">{data.deposit}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {data.oneMinutePrice}
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

export default TablesCard;
