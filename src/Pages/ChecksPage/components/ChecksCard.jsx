import moment from "moment";

const ChecksCard = ({
  data,
  mode,
  cellNumber,
  setOpenMoreModal,
  openMoreDetails,
}) => {
  // console.log(data.orders);

  let orders =
    Array.isArray(data.orders) && data.orders.length > 0
      ? data.orders
          .map((order) => {
            return `${order.order.product.productName} - ${order.orderCount}`;
          })
          .join(", ")
      : "";

  const openMoreModal = () => {
    setOpenMoreModal(true);
    openMoreDetails(data);
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
              <div className="table-scroll-text">
                {data.table?.name} - <span>{data.table.tableNumber}</span>
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text">{orders}</div>
              <div className="right-fade"></div>
            </div>
          </td>

          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {data.table.deposit}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.totalPayment}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">{data.totalDate}</div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {data.table.oneMinutePrice}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {moment(data.createdAt).format("YYYY.MM.DD")}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td className="more" onClick={() => openMoreModal()}>
            Ətraflı
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
                <span className="type">Masa adı :</span>
                <p>
                  {data.table?.name ? data.table?.name : "boş"} -{" "}
                  {data.table.tableNumber}
                </p>
              </li>
              <li>
                <span className="type">Sifarişlər :</span>
                <div>{orders}</div>
              </li>
              <li>
                <span className="type">Depozit:</span>
                <p>{data.table.deposit ? data.table.deposit : "yoxdur"}</p>
              </li>
              <li>
                <span className="type">Ümumi məbləğ:</span>
                <p>{data.totalPayment}</p>
              </li>
              <li>
                <span className="type">Ümumi vaxt:</span>
                <p>{data.totalDate}</p>
              </li>
              <li>
                <span className="type">1 saatlıq qiymət:</span>
                <p>
                  {data.table.oneMinutePrice
                    ? data.table.oneMinutePrice
                    : "yoxdur"}
                </p>
              </li>
              <div className="right">
                <span
                  className="type"
                  onClick={() => {
                    openMoreModal();
                  }}
                >
                  Ətraflı
                </span>
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ChecksCard;
