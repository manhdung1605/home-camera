import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useNavigate} from "react-router-dom"
import React from 'react';
import './register.css'
const Register = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('login account', values);
        if (values.username === "abc" && values.password === "123"){
            console.log('register successully');
            sessionStorage.setItem('usn', values.username);
            navigate("/login")
        } else {
            console.log('register failed')
        }
    };

    return (
        <div id='wrapper'>
            <div className='form'>
                <Typography style={{ marginBottom: "20px", textAlign: "center" }}>ĐĂNG KÝ HỆ THỐNG</Typography>
                <Form name="normal_login" className="login-form" initialValues={{remember: true,}} onFinish={onFinish}>
                    {/* Nhap ten dang nhap */}
                    <Form.Item name="username" rules={[{ required: true, message: 'Vui lòng điền tên đăng nhập!',},]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
                    </Form.Item>
                    {/* Nhap mat khau */}
                    <Form.Item name="password" rules={[{required: true, message: 'Vui lòng nhập mật khẩu',},]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Mật khẩu"/>
                    </Form.Item>
                    {/* Nhap lai mat khau */}
                    <Form.Item name="repassword" rules={[{required: true, message: 'Vui lòng nhập lại mật khẩu',},]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Mời nhập lại mật khẩu"/>
                    </Form.Item>
                    {/* Dang ky */}
                    <Form.Item style={{textAlign:"center"}}>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{borderRadius: "10px", marginRight:"10px"}}>
                            Đăng ký 
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Register;