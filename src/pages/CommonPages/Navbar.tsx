import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png"
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const screenSize = window.innerWidth;
    console.log(screenSize)
    useEffect(() => {

    }, [])

    const showDrawer = () => {
        setVisible(true);
    };
    const closeDrawer = () => {
        setVisible(false);
    };
    const items =
        <>
            <Menu.Item key="1">
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to="/about">About</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
                <NavLink to="/products">Products</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
                <NavLink to="/contact">Contact</NavLink>
            </Menu.Item>
        </>
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-blue-600">
                                <img src={logo} alt="" className="max-w-[180px]" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        <NavLink to="/meeting-rooms" className={({ isActive }) => isActive ? "active" : `text-gray-800 hover:text-blue-600`}>
                            Meeting Rooms
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : `text-gray-800 hover:text-blue-600`}>
                            About Us
                        </NavLink>
                        <NavLink to="/products" className="text-gray-800 hover:text-blue-600">
                            Contact Us
                        </NavLink>
                        <NavLink to="/contact" className="text-gray-800 hover:text-blue-600">
                            Login/Register
                        </NavLink>
                    </div>
                    <div className="flex md:hidden items-center">
                        <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
                    </div>
                </div>
            </div>
            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={visible}>
                <Menu mode="inline" onClick={closeDrawer}>
                    {items}
                </Menu>
            </Drawer>
        </nav>
    );
};

export default Navbar;
