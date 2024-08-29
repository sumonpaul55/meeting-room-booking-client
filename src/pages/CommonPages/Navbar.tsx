import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, Button, Drawer, MenuProps, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png"
import { navbarGenerator } from "../../utils/navbarGenerator";
import { NavItemsPath } from "../../lib/routerAndNavItemsPath";
import { FaUser } from "react-icons/fa";
import { BiBox, BiExit } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
type MenuItem = Required<MenuProps>['items'][number];


const Navbar = () => {
    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()
    const [visible, setVisible] = useState(false);

    const navigate = useNavigate()
    const showDrawer = () => {
        setVisible(true);
    };
    const closeDrawer = () => {
        setVisible(false);
    };

    const items: MenuItem[] = navbarGenerator(NavItemsPath)
    if (!user) {
        items.push({
            key: "Login",
            label: <NavLink to="/login">Login</NavLink>
        })
    }
    const UserdropDownItems: MenuItem[] = [
        {
            key: "bookings-or-dashboard", label: <NavLink to={user?.role === "user" ? `/myBookings` : "/dashboard"}><Button className="px-2">{user?.role === "user" ? "My Bookings" : "Dashboard"}<BiBox size={16} /></Button></NavLink>
        },
        {
            key: "Logout", label: <Button onClick={() => handleLogout()} className="px-2 w-full justify-start">Logout <BiExit size={16} /></Button>
        },
    ]
    const handleLogout = () => {
        const tosatId = toast.loading("Porccessing...")
        dispatch(logOut());
        toast.success("Logged Out Successful", { id: tosatId })
        navigate('/')
    }

    return (
        <nav className="shadow-md sticky top-0 bg-white bg-opacity-60 backdrop-blur z-50 py-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-blue-600">
                                <img src={logo} alt="" className="max-w-[180px]" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center w-full">
                        <Menu mode="horizontal" style={{ width: "100%", justifyContent: "end", border: "0", fontSize: "17px" }} items={items} className="font-poppins font-medium bg-transparent" />
                        {/* user icon and dropdown based on user */}
                        {
                            user &&
                            <Dropdown trigger={['click']} menu={{ items: UserdropDownItems }} arrow={true} overlayStyle={{ border: "1px solid #ccc", borderRadius: "8px" }}>
                                <Button className="px-6 font-semibold">User <FaUser size={15} /></Button>
                            </Dropdown>
                        }
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
                {
                    user &&
                    <Dropdown className="ml-7" trigger={['click']} menu={{ items: UserdropDownItems }} arrow={true} overlayStyle={{ border: "1px solid #ccc", borderRadius: "8px" }}>
                        <Button className="px-6 font-semibold">User <FaUser size={15} /></Button>
                    </Dropdown>
                }
            </Drawer>
        </nav>
    );
};

export default Navbar;
