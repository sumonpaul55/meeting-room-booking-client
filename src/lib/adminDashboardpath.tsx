
import Allrooms from "../pages/Dashboard/rooms/Allrooms";

export const adminDashDashboarditmes = [
    {
        index: true,
        element: <Allrooms />
    },
    {
        name: "Room Management",
        path: "all-rooms",
        element: <Allrooms />
    },
    {
        name: "Slot Management",
        path: "alots",
        element: <Allrooms />
    }
]