import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/CommonPages/Error";
import DashBoard from "../layOuts/DashBoard";
import MainLayout from "../layOuts/MainLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MainLayout />

            }
        ],

    },
    // dashboard paths
    {
        path: "dashboard",
        element: <DashBoard />
    }
])

export default router