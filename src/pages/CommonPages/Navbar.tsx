import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Button, Drawer, MenuProps, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png"
import { navbarGenerator } from "../../utils/navbarGenerator";
import { userPath } from "../../utils/userPaths";
import { FaUser } from "react-icons/fa";
import { BiBox, BiExit } from "react-icons/bi";
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
    items.push(
        { key: "login", label: <NavLink to="/login">Login/SignUp</NavLink> }
        // { key: "user", label: <FaUser /> }
    )
    const UserdropDownItems: MenuItem[] = [
        {
            key: "Logout", label: <Button className="px-2 w-full justify-start">Logout <BiExit size={16} /></Button>
        },
        {
            key: "Logout", label: <NavLink to="/login"><Button className="px-2">My Bookings <BiBox size={16} /></Button></NavLink>
        }
    ]
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
                        <Menu mode="horizontal" style={{ width: "100%", justifyContent: "end", border: "0", fontSize: "17px" }} items={items} className="font-poppins font-medium" />
                        {/* user icon and dropdown based on user */}
                        <Dropdown trigger={['click']} menu={{ items: UserdropDownItems }} arrow={true} overlayStyle={{ border: "1px solid #ccc", borderRadius: "8px" }}>
                            <Button className="px-6 font-semibold">User <FaUser size={15} /></Button>
                        </Dropdown>
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
                <Dropdown className="ml-7" trigger={['click']} menu={{ items: UserdropDownItems }} arrow={true}>
                    <Button className="px-7">User <FaUser size={15} /></Button>
                </Dropdown>
            </Drawer>
        </nav>
    );
};

export default Navbar;
