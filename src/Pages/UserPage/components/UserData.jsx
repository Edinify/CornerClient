import React from "react";
import { useSelector } from "react-redux";

const UserData = ({ categoryPageNum }) => {
 

const {userCode} = useSelector(state=>state.userCode)


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
            </tbody>
          </table>

          <div className="details-list-tablet course-list-mobile">
            <h3 className="details-list-title">Fənn adı</h3>
            <p>{userCode.accessCode}</p>
          </div>
        </>
    </>
  );
};

export default UserData;
