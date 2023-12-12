import React from "react";
import { Route } from "react-router";
import FinancePage from "../Pages/FinancePage/FinancePage";
import TablesPage from "../Pages/TablesPage/TablesPage"
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import WarehousePage from "../Pages/WarehousePage/WarehousePage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import UserPage from "../Pages/UserPage/UserPage";
import WorkersPage from "../Pages/WorkerPage/WorkerPage";
import ChecksPage from "../Pages/ChecksPage/ChecksPage";

const AdminPanelRoute = () => {
  return (
    <>
      <Route path="/finance" element={<FinancePage />} />
      <Route path="/finance/expenses" element={<FinancePage />} />
      <Route path="/tables" element={<TablesPage/>} />
      <Route path="/category"  element={<CategoryPage/>} />
      <Route path="/warehouse"  element={<WarehousePage/>} />
      <Route path="/menus"  element={<MenuPage/>} />
      <Route path="/menus/menu"  element={<MenuPage/>} />
      <Route path="/menus/set"  element={<MenuPage/>} />
      <Route path="/workers" element={<WorkersPage/>} />
      <Route path="/checks" element={<ChecksPage/>} />
    </>
  );
};

export default AdminPanelRoute;
