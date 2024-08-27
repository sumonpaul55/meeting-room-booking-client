import { Outlet } from "react-router-dom"
import Navbar from "../pages/CommonPages/Navbar"
import RoomifyFooter from "../pages/CommonPages/Footer"
import Gotop from "../components/common/GoTopBtn"


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <RoomifyFooter />
            <Gotop />
        </>
    )
}

export default MainLayout