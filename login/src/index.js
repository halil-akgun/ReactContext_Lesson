import { createRoot } from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./global.css";
import { AuthProvider } from "./context/store";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
