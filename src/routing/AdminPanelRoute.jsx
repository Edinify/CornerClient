import React from "react";
import { Route } from "react-router";
import FinancePage from "../Pages/FinancePage/FinancePage";
import TablesPage from "../Pages/TablesPage/TablesPage"
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import WarehousePage from "../Pages/WarehousePage/WarehousePage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import UserPage from "../Pages/UserPage/UserPage";
import WorkersPage from "../Pages/WorkerPage/WorkerPage";

const AdminPanelRoute = () => {
  return (
    <>
      <Route path="/finance" element={<FinancePage />} />
      <Route path="/finance/expenses" element={<FinancePage />} />
      <Route path="/tables" element={<TablesPage/>} />
      <Route path="/category"  element={<CategoryPage/>} />
      <Route path="/warehouse"  element={<WarehousePage/>} />
      <Route path="/menu"  element={<MenuPage/>} />
      <Route path="/user" element={<UserPage/>} />
      <Route path="/workers" element={<WorkersPage/>} />
      
    </>
  );
};

export default AdminPanelRoute;
