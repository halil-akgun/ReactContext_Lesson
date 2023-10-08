import React, { useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/store";

const PrivateRoute = () => {
    const store = useContext(AuthContext);
    const { authState } = store;
    const location = useLocation();

    // her sayfa gecisinde user icin istek gonder

    const token = localStorage.getItem("token");

    

    if (location.pathname === "/login") return <Outlet />;

    if (!token || !authState.isAuthenticated || !authState.user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
