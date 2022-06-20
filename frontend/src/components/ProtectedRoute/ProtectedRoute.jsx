import React from "react";
import { Outlet } from "react-router";
import SignIn from "../SignIn/SignIn";


const ProtectedRoute = () => {
    const isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <SignIn />;
};

export default ProtectedRoute;
