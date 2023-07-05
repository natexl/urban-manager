import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import UserCard from '@/components/user/userCard';
import "./manager.less"
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('公告发布', '/manager/notice', <PieChartOutlined />),
    getItem('用户管理', '/manager/users', <DesktopOutlined />),
    getItem('权限管理', '/manager/permission', <FileOutlined />),
    getItem('矢量编辑', '/manager/edit', <FileOutlined />),
    getItem('事务处理', '/manager/transaction', <FileOutlined />),
    getItem('系统概况', '/manager/system', <FileOutlined />)
];


const Manager = () => {
    const [collapsed, setCollapsed] = useState(false);
    const naviagate = useNavigate()

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const menuClickHandler = (e: any) => {
        const toRoute: string = e.key
        naviagate(toRoute)
    }

    return (
        <>
            <Layout style={{ minHeight: '100vh' }} className='manager'>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClickHandler}/>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} className='manager-header'>
                        <div className="title">
                            乡村房地矢量管理系统
                        </div>
                        <div className="usercard-wrap">
                            <UserCard></UserCard>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }} className='manager-content'>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <div style={{ background: colorBgContainer }} className='router-outlet'>
                            <Outlet/>
                        </div>
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
                </Layout>
            </Layout>
        </>
    )
}

export default Manager