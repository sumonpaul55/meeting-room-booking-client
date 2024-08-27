import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/CommonPages/Error";
import DashBoard from "../layOuts/DashBoard";
import MainLayout from "../layOuts/MainLayout";
import { generateRoute } from "../utils/generateChildRoute";
import { userPath } from "../utils/userPaths";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: generateRoute(userPath)
    },
    // dashboard paths
    {
        path: "/dashboard",
        element: <DashBoard />,
        children: [{}]
    }
])

export default router