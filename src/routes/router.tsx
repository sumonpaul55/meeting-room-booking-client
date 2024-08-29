import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/CommonPages/Error";
import DashBoard from "../layOuts/DashBoard";
import MainLayout from "../layOuts/MainLayout";
import { generateRoute } from "../utils/generateChildRoute";
import { NavItemsPath } from "../utils/userPaths";
import ScrollToTop from "../components/common/ScrollToTop";
import Registration from "../pages/CommonPages/Registration";


<ScrollToTop />

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: generateRoute(NavItemsPath)
    },
    {
        path: 'register',
        element: <Registration></Registration>
    },
    // dashboard paths
    {
        path: "/dashboard",
        element: <DashBoard />,
        children: [{}]
    }
])

export default router