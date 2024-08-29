import Addroom from "../pages/Dashboard/rooms/Addroom";
import Allrooms from "../pages/Dashboard/rooms/Allrooms";

export const adminDashDashboarditmes = [
    {
        index: true,
        element: <Allrooms />
    },
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