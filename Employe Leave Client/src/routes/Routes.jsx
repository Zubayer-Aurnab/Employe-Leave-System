
import {
    createBrowserRouter,
} from "react-router-dom";
import AllEmployes from "../Pages/AllEmployes/AllEmployes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyRequest from "../Pages/MyRequest/MyRequest";
import Registration from "../Pages/Registration/Registration";
import SendRequest from "../Pages/SendRequest/SendRequest";
import AllRequest from '../Pages/AllRequest/AllRequest'



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
            },
            {
                path: '/dashboard/my-req',
                element: <MyRequest />
            },
            {
                path: "/dashboard/all-req",
                element: <AllRequest />
            }
        ]

    },

]);