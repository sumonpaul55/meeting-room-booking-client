import { Outlet } from "react-router-dom"
import Navbar from "../pages/CommonPages/Navbar"
import { Footer } from "antd/es/layout/layout"


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout