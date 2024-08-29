// import MyBookings from "../pages/myBookings/MyBookings";

import Addroom from "../pages/Dashboard/rooms/Addroom";
import Allrooms from "../pages/Dashboard/rooms/Allrooms";

export const adminDashDashboarditmes = [
    {
        name: "All Rooms",
        path: "all-rooms",
        element: <Allrooms />
    },
    {
        name: "Add room",
        path: "add-room",
        element: <Addroom />
    }
]