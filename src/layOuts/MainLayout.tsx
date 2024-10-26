import { Outlet } from "react-router-dom"
import Navbar from "../pages/CommonPages/Navbar"
import RoomifyFooter from "../pages/CommonPages/Footer"
import Gotop from "../components/common/GoTopBtn"
import ScrollToTop from "../components/common/ScrollToTop"
import CartIcon from "../components/common/CartIcon"


const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <CartIcon />
            <Navbar />
            <Outlet />
            <RoomifyFooter />
            <Gotop />
        </>
    )
}

export default MainLayout