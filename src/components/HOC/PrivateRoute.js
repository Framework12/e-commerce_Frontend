import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const token = window.localStorage.getItem("token");
  if (!token) return <Navigate to={"/signin"} />;
  return <Outlet/>;
}
export default PrivateRoute;
