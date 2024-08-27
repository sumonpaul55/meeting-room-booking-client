import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Button, Drawer, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png"
import { navbarGenerator } from "../../utils/navbarGenerator";
import { userPath } from "../../utils/userPaths";
type MenuItem = Required<MenuProps>['items'][number];


const Navbar = () => {
    const [visible, setVisible] = useState(false);


    const showDrawer = () => {
        setVisible(true);
    };
    const closeDrawer = () => {
        setVisible(false);
    };

    const items: MenuItem[] = navbarGenerator(userPath)
    items.push({ key: "login", label: <NavLink to="/login">Login/SignUp</NavLink> })
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
                    <div className="hidden md:flex space-x-4 items-center w-full">
                        <Menu mode="horizontal" style={{ width: "100%", justifyContent: "end", border: "0", fontSize: "18px", fontWeight: 500 }} items={items} />
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
                <Menu mode="inline" onClick={closeDrawer} items={items} />
            </Drawer>
        </nav>
    );
};

export default Navbar;
