import React from "react";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import Loading from "../../../globalComponents/Loading/Loading";
import UserCard from "./UserCard";

const UserData = ({ categoryPageNum }) => {
 

const {userCode} = useSelector(state=>state.userCode)

console.log(userCode.accessCode)

  const tableHead = [
    { id: 1, label: "Istifadəçi" },
  ];

  return (
    <>
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
              <tr>
                <td>
                  {userCode.accessCode}
                </td>
              </tr>
              {/* {userCode?.map((courseName, i) => (
                <UserCard
                  key={i}
                  data={courseName}
                  mode="desktop"
                  cellNumber={i + 1 + (categoryPageNum - 1) * 10}
                />
              ))} */}
            </tbody>
          </table>

          <div className="details-list-tablet course-list-mobile">
            <h3 className="details-list-title">Fənn adı</h3>
            <p>{userCode.accessCode}</p>
            {/* {userCode?.map((courseName, i) => (
              <UserCard
                key={i}
                data={courseName}
                mode="mobile"
                cellNumber={i + 1 + (categoryPageNum - 1) * 10}
              />
            ))} */}
          </div>
        </>
    </>
  );
};

export default UserData;
