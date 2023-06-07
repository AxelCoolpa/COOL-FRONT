import { createBrowserRouter } from "react-router-dom";
import Settings from "../pages/Admin/Settings";
import Dashboard from "../pages/Admin/Dashboard";
import { Admin } from "../layouts/Admin";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter ([
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "settings",
                element: <Settings />
            }
        ]
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
])