import Bookings from "../pages/Dashboard/bookings/Bookings";
import DashboardHome from "../pages/Dashboard/DashboardHome";

// export const userDashBoardPath = [
//     {
//         Name: "Dashboard",
//         path: "my-bookings",
//         element: <Bookings />
//     },
// ]


export const userDashBoardPath = [
    {
        index: true,
        element: <DashboardHome />
    },
    {
        Name: "Dashboard",
        path: "/user/dashboard",
        element: <Bookings />
    },

]