import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { Pagination } from "antd";
import Loading from "../../../../globalComponents/Loading/Loading";

const CategoryData = ({ categoryPageNum, getPageNumber }) => {
  const { totalPages, category, loading } = useSelector(
    (state) => state.category
  );

  const tableHead = [
    { id: 1, label: "Kateqoriya" },
    { id: 3, label: "", type: "more-options-head" },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <table className="details-table courses-table">
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
              {category.map((courseName, i) => (
                <CategoryCard
                  key={i}
                  data={courseName}
                  mode="desktop"
                  cellNumber={i + 1 + (categoryPageNum - 1) * 10}
                />
              ))}
            </tbody>
          </table>

          <div className="details-list-tablet course-list-mobile">
            <h3 className="details-list-title">Kateqoriya adı</h3>
            {category.map((courseName, i) => (
              <CategoryCard
                key={i}
                data={courseName}
                mode="mobile"
                cellNumber={i + 1 + (categoryPageNum - 1) * 10}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="pages-pagination">
              <Pagination
                current={categoryPageNum}
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

export default CategoryData;
