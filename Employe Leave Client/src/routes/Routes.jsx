
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllEmployes from "../Pages/AllEmployes/AllEmployes";
import SendRequest from "../Pages/SendRequest/SendRequest";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Registration />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/all-employes',
                element: <AllEmployes />
            },
            {
                path: '/dashboard/send-req',
                element: <SendRequest />
            }
        ]

    },

]);