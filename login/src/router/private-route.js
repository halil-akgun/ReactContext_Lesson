import React, { useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/store";

const PrivateRoute = () => {
    const store = useContext(AuthContext);
    const { authState } = store;
    const location = useLocation();

    // her sayfa gecisinde user icin istek gonder

    const token = localStorage.getItem("token");

    console.log("This part worked")

    // If user is trying to access the login page while they're authenticated
    if (location.pathname === "/login" && token && authState.isAuthenticated) {
        console.log("This part worked 2");
        return <Navigate to="/" />;
    }

    // If user is not authenticated and trying to access a protected route
    if (!token || !authState.isAuthenticated || !authState.user) {
        // If they are trying to access login, allow them through to the Outlet
        if (location.pathname === "/login") return <Outlet />;

        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
