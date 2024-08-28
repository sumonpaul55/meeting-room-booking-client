import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import Home from "../pages/home/Home";
import MeetingRooms from "../pages/meetingRooms/MeetingRooms";

export const NavItemsPath = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Meeting Room",
    path: "meeting-rooms",
    element: <MeetingRooms />,
  },
  {
    name: "About Us",
    path: "about-us",
    element: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "contact-us",
    element: <ContactUs />,
  },
];
