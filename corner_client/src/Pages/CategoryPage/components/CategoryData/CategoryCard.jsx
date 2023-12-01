import {  useDispatch } from "react-redux";
import { CATEGORY_M0DAL_ACTION_TYPE } from "../../../../redux/actions-type";
import UpdateDeleteModal from "../../../../globalComponents/Modals/UpdateDeleteModal/UpdateDeleteModal";
import { deleteCategoryAction } from "../../../../redux/actions/categoryAction";

const CategoryCard = ({ data, mode, cellNumber }) => {
  const dispatch = useDispatch();

  const updateItem = () => {
    const { name, _id } = data;
    dispatch({
      type: CATEGORY_M0DAL_ACTION_TYPE.GET_CATEGORY_MODAL,
      payload: { data: { name, _id }, openModal: true },
    });
  };
  const deleteItem = () => {
    dispatch(deleteCategoryAction(data._id));
  };


  return (
    <>
      {mode === "desktop" ? (
        <tr className="class-table">
          <td>
            <div className="td-con">
              <div className="cell-number">{cellNumber}.</div>
              <div className="table-scroll-text">{data?.name}</div>
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
            <h3 className="name">{data.name}</h3>
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

export default CategoryCard;
