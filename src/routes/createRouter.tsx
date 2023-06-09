import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { Admin } from "../layouts/Admin";
import Settings from "../pages/Admin/Settings";
import Dashboard from "../pages/Admin/Dashboard";
import { User } from "../layouts/User";
import Acomodation from "../pages/User/Acomodation";
import Discover from "../pages/User/Discover";
import Transport from "../pages/User/Transport";
import { Maps } from "../pages/User/Maps";
import Packages from "../pages/User/Packages";
import Tickets from "../pages/User/Tickets";

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
        element: <User />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "settings",
                element: <Acomodation />
            },
            {
                path: "settings",
                element: <Discover />
            },
            {
                path: "settings",
                element: <Transport />
            },
            {
                path: "settings",
                element: <Maps/>
            },
            {
                path: "settings",
                element: <Packages />
            },
            {
                path: "settings",
                element: <Tickets />
            },
        ]
    },
    {
        path: "/home",
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