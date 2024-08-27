import { Outlet } from "react-router-dom"
import Navbar from "../pages/CommonPages/Navbar"
import RoomifyFooter from "../pages/CommonPages/Footer"


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <RoomifyFooter />
        </>
    )
}

export default MainLayout