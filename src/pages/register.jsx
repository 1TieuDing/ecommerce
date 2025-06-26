import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row } from "antd"
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    return (
        <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
            style={{ margin: "30px auto" }}
        >
            <h3 style={{ textAlign: 'center', fontSize: '24px' }}>Đăng ký tài khoản</h3>
            <Row justify={"center"}>
                <Col xs={24} md={16} lg={8}>
                    <Form.Item
                        label="Tên người dùng"
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Tên người dùng" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
                    </Form.Item>

                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập xác nhận mật khẩu!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" onKeyDown={(event) => {
                            if (event.key === 'Enter') form.submit()
                        }} />
                    </Form.Item>

                    <div>
                        <Button onClick={() => form.submit()} type="primary">Đăng ký</Button>
                    </div>

                    <Divider />
                    <div>Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link></div>
                </Col>
            </Row>
        </Form>
    )
}

export default RegisterPage