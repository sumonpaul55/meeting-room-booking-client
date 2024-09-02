
import Allrooms from "../pages/Dashboard/rooms/Allrooms";
import SlotManagement from "../pages/Dashboard/slots/SlotManagement";

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
        path: "alot-management",
        element: <SlotManagement />
    }
]