import React from 'react';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { adminDashDashboarditmes } from '../lib/adminDashboardpath';
import { userDashBoardPath } from '../lib/userDashboardPath';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { navbarGenerator } from '../utils/navbarGenerator';
import { verifiyToken } from '../utils/VerifyToken';

const { Header, Content, Sider } = Layout;


const DashBoard: React.FC = () => {
    const token = useAppSelector(state => state.auth.token)
    let loggeduser;
    if (token) {
        loggeduser = verifiyToken(token)
    }

    const { pathname } = useLocation()
    const pagename = pathname?.split("/").pop()
    let items: ItemType<MenuItemType>[] = []
    switch (loggeduser?.role) {
        case "admin":
            items = navbarGenerator(adminDashDashboarditmes)
            break;
        case "user":
            items = navbarGenerator(userDashBoardPath)
            break;
    }

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <div className='h-full lg:fixed top-16'>
                <Sider
                    className='lg:fixed top-0 h-screen'
                    breakpoint="lg"
                    collapsedWidth="0">
                    <Menu theme="dark" mode="inline" items={items} />
                </Sider>
            </div>
            <Layout>
                <Content style={{ margin: '10px 10px 0' }}>
                    <div
                        className='min-h-screen overflow-y-scroll lg:ml-[200px]'>
                        <Header style={{ padding: "15px", background: colorBgContainer, height: "auto" }} className='w-full mb-3 flex justify-between rounded-lg'>
                            <h2 className='font-bold md:text-lg'>User: {loggeduser?.name}</h2>
                            <h2 className='font-bold md:text-lg'>Page: {pagename}</h2>
                            <h2 className='font-bold md:text-lg'>Role: {loggeduser?.role}</h2>
                        </Header>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashBoard;