import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/CommonPages/Error";
import DashBoard from "../layOuts/DashBoard";
import MainLayout from "../layOuts/MainLayout";
import MeetingRooms from "../pages/meetingRooms/MeetingRooms";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/meeting-rooms",
                element: <MeetingRooms />
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