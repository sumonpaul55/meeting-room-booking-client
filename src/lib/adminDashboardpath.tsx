
import BookedSlots from "../pages/Dashboard/bookedSlots/BookedSlots";
import BookingMangement from "../pages/Dashboard/bookingManagement/BookingMangement";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Allrooms from "../pages/Dashboard/rooms/Allrooms";
import SlotManagement from "../pages/Dashboard/slots/SlotManagement";
import AllUsers from "../pages/Dashboard/userManagment/AllUsers";

export const adminDashDashboarditmes = [
    {
        index: true,
        element: <DashboardHome />
    },
    {
        name: "User Management",
        path: "users",
        element: <AllUsers />
    },
    {
        name: "Room Management",
        path: "all-rooms",
        element: <Allrooms />
    },
    {
        name: "Slot Management",
        path: "slot-management",
        element: <SlotManagement />
    },
    {
        name: "Booking Management",
        path: "booking-management",
        element: <BookingMangement />
    },
    {
        name: "Booked Slots",
        path: "booked-slots",
        element: <BookedSlots />
    },
]