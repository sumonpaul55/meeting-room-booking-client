import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

const { Header, Content, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
    }),
);

const DashBoard: React.FC = () => {
    const user = useAppSelector(state => state.auth.user)
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
                </Sider>
            </div>
            <Layout>
                <Content style={{ margin: '10px 10px 0' }}>
                    <div
                        className='min-h-screen overflow-y-scroll lg:ml-[200px]'>
                        <Header style={{ padding: "15px", background: colorBgContainer, height: "auto" }} className='w-full mb-3 flex justify-between rounded-lg'>
                            <h2 className='font-bold md:text-lg'>User: {user?.name}</h2>
                            <h2 className='font-bold md:text-lg'>Role: {user?.role}</h2>
                        </Header>
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashBoard;