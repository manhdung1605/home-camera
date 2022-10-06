import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography,message } from 'antd';
import { useNavigate} from "react-router-dom"
import React from 'react';
import './login.css'
const Login = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('login account', values);
        if (values.username === "abc" && values.password === "123"){
            console.log('login successully');
            sessionStorage.setItem('usn', values.username);
            message.success('Đăng nhập thành công !!!');
            navigate("/")
        } else {
            console.log('login failed')
        }
    };
    const handleRegister = () => {
        navigate("/register")
    }

    return (
        <div id='wrapper'>
            <div className='form'>
                <Typography style={{ marginBottom: "20px", textAlign: "center" }}>ĐĂNG NHẬP HỆ THỐNG</Typography>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng điền tên đăng nhập!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Nhớ mật khẩu</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="http://localhost:3000/">
                           Quên mật khẩu
                        </a>
                    </Form.Item>
                    <Form.Item style={{textAlign:"center"}}>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{borderRadius: "10px", marginRight:"10px"}}>
                            Đăng nhập
                        </Button>
                        <Button type="primary" className="login-form-button" style={{backgroundColor: "green", borderRadius: "10px"}} onClick={handleRegister}>
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Login;