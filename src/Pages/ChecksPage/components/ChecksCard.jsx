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
            return `${order.order.product.productName} - ${order.orderCount} ədəd`;
          })
          .join(", ")
      : "";

  const listData = [
    {
      key: "Kateqoriya",
      value: data.table.category ? data.table.category : "boş",
    },
    {
      key: "Masa adı və nömrəsi ",
      value: data.table
        ? `${data.table.name ? data.table.name : ""} - ${
            data.table?.tableNumber
          }`
        : "boş",
    },
    { key: "Sifarişlər", value: orders },
    {
      key: "Depozit",
      value: data.table.deposit ? data.table.deposit : "yoxdur",
    },
    { key: "Ümumi məbləğ", value: data.totalPayment },
    { key: "Ümumi vaxt", value: data.totalDate },
    {
      key: "1 saatlıq qiymət",
      value: data.table
        ? `${data.table.oneMinutePrice ? data.table.oneMinutePrice : ""} `
        : "yoxdur",
    },
  ];

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
                {data.table.deposit} AZN
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {data.totalPayment} AZN
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {data.totalDate} Dəq{" "}
              </div>
              <div className="right-fade"></div>
            </div>
          </td>
          <td>
            <div className="td-con">
              <div className="table-scroll-text phone">
                {data.table.oneMinutePrice} AZN
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
              {listData.map((item, index) => (
                <li key={index} className={item.className}>
                  <span className="type">{item.key}:</span>
                  <p>{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <span onClick={() => openMoreModal()}>Ətraflı</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ChecksCard;
