import Bookings from "../pages/Dashboard/bookings/Bookings";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import MypayMentHistory from "../pages/Dashboard/myPaymentHistory/MypayMentHistory";
import MyProfile from "../pages/Dashboard/myProfile/myProfile";

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
        name: "My Profile",
        path: "my-profile",
        element: <MyProfile />
    },
    {
        name: "My Bookings",
        path: "myBookings",
        element: <Bookings />
    },
    {
        name: "Payment History",
        path: "payment-history",
        element: <MypayMentHistory />
    }

]