import { useState, React } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { EXPENSES_MODAL_ACTION_TYPE } from "../../../../../redux/actions-type";
import { deleteExpensesAction } from "../../../../../redux/actions/expensesAction";
import UpdateDeleteModal from "../../../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";

const ExpensesCard = ({ data, mode, cellNumber, page }) => {
  const dispatch = useDispatch();
  const [deleteExpensesModal, setDeleteExpensesModal] = useState(false);

  const updateItem = () => {
    const { price, amount, name, date, _id } = data;
    dispatch({
      type: EXPENSES_MODAL_ACTION_TYPE.GET_EXPENSES_MODAL,
      payload: { data: { price, amount, name, date, _id }, openModal: true },
    });
  };
  const deleteItem = () => {
    dispatch(deleteExpensesAction(data._id));
  };


  const listData = [

    {
      key: "Miqdarı",
      value: data.amount ? data.amount : "boş",
      className: "",
    },
    {
      key: "Məbləği",
      value: data.price ? data.price : "boş",
    },
    {
      key: "Tarix",
      value: data.createdAt
        ? `${moment(data.createdAt).format("YYYY-MM-DD")}`
        : "boş",
      className: "",
    },
  ];

  return (
    <>
      {mode === "desktop" ? (
        <tr>
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data.name}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">{data.amount}</div>
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
              <div className="table-scroll-text">
                {data.date ? moment(data.date).format("DD-MM-YYYY") : ""}
              </div>
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
            <h3>{data.name}</h3>
            <ul>
           {listData.map((item, index) => (
                <li key={index} className={item.className} >
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

export default ExpensesCard;
