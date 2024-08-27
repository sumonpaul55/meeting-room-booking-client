import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png"
const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const closeDrawer = () => {
        setVisible(false);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-blue-600">
                                <img src={logo} alt="" className="max-w-[150px]" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        <Link to="/" className="text-gray-800 hover:text-blue-600">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-800 hover:text-blue-600">
                            About
                        </Link>
                        <Link to="/products" className="text-gray-800 hover:text-blue-600">
                            Products
                        </Link>
                        <Link to="/contact" className="text-gray-800 hover:text-blue-600">
                            Contact
                        </Link>
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
                visible={visible}
            >
                <Menu mode="inline" onClick={closeDrawer}>
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/products">Products</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/contact">Contact</Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </nav>
    );
};

export default Navbar;
