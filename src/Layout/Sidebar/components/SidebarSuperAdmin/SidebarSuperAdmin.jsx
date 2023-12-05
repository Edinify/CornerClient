import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as TableIcon } from "../../../../assets/icons/tableIcon.svg";

const SidebarSuperAdmin = ({ closeSidebar }) => {

  return (
    <ul className="sidebar-nav-list">
      <li>
        <NavLink to="/workers" onClick={closeSidebar}>
          <TableIcon />
          Masalar
        </NavLink>
      </li>
    </ul>
  );
};

export default SidebarSuperAdmin;
