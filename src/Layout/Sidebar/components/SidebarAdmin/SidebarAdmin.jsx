import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as TableIcon } from "../../../../assets/icons/tableIcon.svg";
import { ReactComponent as ExpensesIcon } from "../../../../assets/icons/expensenIcon.svg";
import { ReactComponent as CategoryIcon } from "../../../../assets/icons/sidebar/category-2-svgrepo-com.svg";
import {ReactComponent as WarehouseIcon} from "../../../../assets/icons/sidebar/warehouse-svgrepo-com.svg"
import {ReactComponent as MenuIcon } from "../../../../assets/icons/sidebar/food-bag-svgrepo-com.svg"
import {ReactComponent as CheckIcon} from "../../../../assets/icons/sidebar/writing-cheque-svgrepo-com.svg"

const SidebarAdmin = ({ closeSidebar }) => {

  return (
    <ul className="sidebar-nav-list">
      <li>
        <NavLink to="/tables" onClick={closeSidebar}>
          <TableIcon />
          Masalar
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" onClick={closeSidebar}>
          <MenuIcon />
          Menyu
        </NavLink>
      </li>
      <li>
        <NavLink to="/category" onClick={closeSidebar}>
          <CategoryIcon />
          Kateqoriya
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/finance/expenses"
          onClick={closeSidebar}
        >
          <ExpensesIcon />
          Maliyyə
        </NavLink>
      </li>
      <li>
        <NavLink to="/warehouse" onClick={closeSidebar}>
          <WarehouseIcon/>
          Anbar
        </NavLink>
      </li>
      <li>
        <NavLink to="/checks" onClick={closeSidebar}>
          <CheckIcon/>
          Çeklər
        </NavLink>
      </li>
    </ul>
  );
};

export default SidebarAdmin;
