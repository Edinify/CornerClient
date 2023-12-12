import React from "react";
import { Route } from "react-router";
import WorkersPage from "../Pages/WorkerPage/WorkerPage";

const UserPanelRoute = () => {
  // console.log(data, "data");(true,"user")
  return (
    <>
      <Route path="/workers" element={<WorkersPage />} />
    </>
  );
};

export default UserPanelRoute;
