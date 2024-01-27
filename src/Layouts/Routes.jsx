import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import DashboardLayout from "./DashboardLayout";
import ChechoutLayout from "./ChechoutLayout";
import Home from "@/Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>This is error page</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'inDash',
                element: <div> A Dashboard element. Youre in dashboard</div>
            }
        ]
    },
    {
        path: '/chechout',
        element: <ChechoutLayout></ChechoutLayout>,
        children: [
            {
                path: 'inCheckout',
                element: <div className=''>Cheout in progress here........</div>
            }
        ]
    }
])