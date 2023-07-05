import { Card, Row, Col, Form, Button, Input, message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./login.less";
import { apiLogin } from "@/apis/login/index";

const Login: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [loginForm] = Form.useForm();
    const navigate = useNavigate()
    
    const onFinish = async (values: any) => {
        console.log("Received values of form: ", values);

        // 处理登录/注册逻辑
        if (!isSignUp) {
            const {username, password} = values
            
            const loginRes = await apiLogin(username, password);
            if(loginRes.success) {
                navigate("/home")
                message.success("login success !")
                return
            }
            message.error("login failed !")
            // if (loginRes.success) { }
        }
    };

    return (
        <>
            <div className="login-wrap">
                <div className="login-main">
                    <Row>
                        <Col span={12} className="login-info">
                            <h2>乡村房地管理系统</h2>
                        </Col>
                        <Col span={12}>
                            <Card title={isSignUp ? "注册" : "登录"} className="login-card">
                                <Form
                                    form={loginForm}
                                    name="login"
                                    onFinish={onFinish}
                                    initialValues={{
                                        remember: true,
                                    }}
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: "请输入用户名！",
                                            },
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined />} placeholder=" 用户名" size="large" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: "请输入密码！",
                                            },
                                        ]}
                                    >
                                        <Input.Password prefix={<LockOutlined />} placeholder=" 密码" size="large" />
                                    </Form.Item>
                                    {isSignUp && (
                                        <Form.Item
                                            name="confirmPassword"
                                            dependencies={["password"]}
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "请确认密码！",
                                                },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue("password") === value) {
                                                            return Promise.resolve();
                                                        }

                                                        return Promise.reject(new Error("两次密码输入不一致！"));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input.Password prefix={<LockOutlined />} placeholder="确认密码" size="large" />
                                        </Form.Item>
                                    )}
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            {isSignUp ? "注册" : "登录"}
                                        </Button>
                                        <Button type="link" onClick={() => setIsSignUp(!isSignUp)}>
                                            {isSignUp ? "返回登录" : "注册账号"}
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Login