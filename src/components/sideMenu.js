import { FaUserAlt, FaCamera } from 'react-icons/fa';
import { Layout, Menu, Typography } from 'antd';
import { BiError, BiBarChartAlt, BiLogOut } from "react-icons/bi";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout

const SideMenu = () => {
    const navigate = useNavigate()
    return <Sider trigger={null} theme="light" width='300px'>
        <Typography className='title' style={{ fontWeight: "bold" }}>
            VIETTEL HOME CAMERA
        </Typography>
        <Menu
            onClick={({ key }) => navigate(key)}
            theme="light"
            mode="inline"
            defaultSelectedKeys={['/']}
            items={[
                {
                    key: '/',
                    icon: <FaUserAlt />,
                    label: 'Quản lý khách hàng',
                },
                {
                    key: '/devices',
                    icon: <FaCamera />,
                    label: 'Quản lý thiết bị',
                },
                {
                    key: '/firmware',
                    icon: <FaCamera />,
                    label: 'Quản lý firmware',
                },
                {
                    key: '/error',
                    icon: <BiError />,
                    label: 'Báo cáo lỗi',
                },
                {
                    key: '/dashboard',
                    icon: <BiBarChartAlt />,
                    label: 'Dashboard Thống kê',
                },
                {
                    key: '/login',
                    icon: <BiLogOut />,
                    label: 'Đăng xuất',
                },
            ]}
        >
        </Menu>
    </Sider>
}

export default SideMenu;