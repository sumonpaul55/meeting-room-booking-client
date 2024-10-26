import React from 'react';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { adminDashDashboarditmes } from '../lib/adminDashboardpath';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { navbarGenerator } from '../utils/navbarGenerator';
import { verifiyToken } from '../utils/VerifyToken';
import { userDashBoardPath } from '../lib/userDashboardPath';
// import NoDataFound from '../components/common/NoDataFound';
const { Content, Sider } = Layout;


const DashBoard: React.FC = () => {
    let loggeduser;
    const token = useAppSelector(state => state.auth.token)
    if (token) {
        loggeduser = verifiyToken(token)
    }

    let items: ItemType<MenuItemType>[] = []
    switch (loggeduser?.role) {
        case "admin":
            items = navbarGenerator(adminDashDashboarditmes)
            break;
        case "user":
            items = navbarGenerator(userDashBoardPath)
            break;
    }

    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();

    // if (loggeduser?.role !== "admin") {
    //     return <NoDataFound />
    // }
    return (
        <Layout>
            <div className='h-full fixed top-14 left-0 z-0'>
                <Sider
                    width="250px"
                    className='lg:fixed top-0 h-screen'
                    breakpoint="lg"
                    collapsedWidth="0">
                    <Menu theme="dark" mode="inline" items={items} style={{ fontSize: "16px", marginTop: "25px", }} />
                </Sider>
            </div>
            <Content style={{ margin: '10px 10px 0' }}>
                <div
                    className='min-h-screen overflow-y-scroll lg:ml-[270px]'>
                    <Outlet />
                </div>
            </Content>
        </Layout>
    );
};

export default DashBoard;