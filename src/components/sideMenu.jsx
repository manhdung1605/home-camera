import { FaUserAlt, FaCamera } from 'react-icons/fa';
import { Layout, Menu, Typography, Popconfirm, message } from 'antd';
import { BiError, BiBarChartAlt, BiLogOut } from "react-icons/bi";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout
const SideMenu = () => {
    const [isLogOut, setIsLogOut] = useState(false)
    const handleMenuItem = ({ key }) => {
        if (key === '/login') {
            console.log('log out')
            navigate(key)
        } else {
            // console.log(isLogOut)
            navigate(key)
        }
    }
    const LogOut = () => {
        const confirm = (e) => {
            setIsLogOut(true)
            message.success('Đăng xuất thành công');
        };

        const cancel = (e) => {
            setIsLogOut(false)
            message.error('Bỏ qua');
        };
        return <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Đồng ý"
            cancelText="Bỏ qua"
        >
            <Typography>Đăng xuất</Typography>
        </Popconfirm>
    }
    const LogOut2 = () => {
        
    }
    const navigate = useNavigate()
    return <Sider trigger={null} theme="light" width='300px'>
        <Typography className='title' style={{ fontWeight: "bold" }}>
            VIETTEL HOME CAMERA
        </Typography>
        <Menu
            onClick={handleMenuItem}
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
                    label: <LogOut />,
                    key: '/login',
                    icon: <BiLogOut />,

                },
            ]}
        >
        </Menu>
    </Sider>
}
export default SideMenu;