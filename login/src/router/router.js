import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import LoginPage from "../pages/login/login";
import PrivateRoute from "./private-route";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
        ],
    },
]);
