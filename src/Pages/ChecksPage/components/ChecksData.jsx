import { useSelector } from "react-redux";
import { Pagination } from "antd";
import Loading from "../../../globalComponents/Loading/Loading";
import ChecksCard from "./ChecksCard";
import { useState } from "react";
import MoreModal from "../../../globalComponents/Modals/MoreModal/MoreModal";

const ChecksData = ({ menusPageNum, getPageNumber }) => {
  const { loading, totalPages } = useSelector((state) => state.checks);
  const [selectedMoreDetails, setSelectedMoreDetails] = useState(null);
  const { checks } = useSelector((state) => state.checks?.checks);
  const [openMoreModal, setOpenMoreModal] = useState(false);

  const tableHead = [
    { id: 1, label: "Kateqoriya" },
    { id: 2, label: "Masa adı və nömrəsi" },
    { id: 3, label: "Sifarişlər" },
    { id: 4, label: "Depozit" },
    { id: 6, label: "Ümumi məbləğ" },
    { id: 5, label: "Ümumi vaxt" },
    { id: 7, label: "1 saatlıq qiymət" },
    { id: 8, label: "Çekin yaranma tarixi" },
    { id: 9, label: "" },
  ];


  const openMoreDetails = (data) => {
    setSelectedMoreDetails(data);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
        {openMoreModal && (
            <MoreModal
              data={selectedMoreDetails}
              setOpenMoreModal={setOpenMoreModal}
            />
          )}
          <table className="details-table check-table">
            <thead>
              <tr>
                {tableHead.map((head, i) => (
                  <th key={i} className={head.type ? head.type : ""}>
                    {head.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {checks?.map((item, i) => (
                <ChecksCard
                  key={i}
                  data={item}
                  mode="desktop"
                  cellNumber={i + 1 + (menusPageNum - 1) * 10}
                  setOpenMoreModal={setOpenMoreModal}
                  openMoreDetails={openMoreDetails}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet with-more">
            {checks?.map((item, i) => (
              <ChecksCard
                key={i}
                data={item}
                mode="tablet"
                cellNumber={i + 1 + (menusPageNum - 1) * 10}
                setOpenMoreModal={setOpenMoreModal}
                openMoreDetails={openMoreDetails}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={menusPageNum}
                defaultCurrent={1}
                total={totalPages * 10}
                onChange={getPageNumber}
                
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ChecksData;
