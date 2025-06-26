import { ArrowRightOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [form] = Form.useForm()

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <Row justify={"center"} style={{ margin: '250px auto' }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: '15px',
                    margin: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        form={form}
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Tài khoản"
                            name="username"
                            rules={[{ required: true, message: 'Tài khoản không được để trống!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Mật khẩu không được để trống!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" onKeyDown={(event) => {
                                if (event.key === 'Enter') form.submit()
                            }} />
                        </Form.Item>
                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Nhớ mật khẩu</Checkbox>
                                </Form.Item>
                                <a href="">Quên mật khẩu</a>
                            </Flex>
                        </Form.Item>

                        <Form.Item>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Button type='primary' onClick={() => form.submit()}>Đăng nhập</Button>
                                <Link to={"/"}>Đến trang chủ <ArrowRightOutlined /></Link>
                            </div>
                        </Form.Item>
                    </Form>
                    <Divider />
                    <div style={{ textAlign: 'center' }}>Chưa có tài khoản? <Link to={'/register'}>Đăng ký tại đây</Link></div>
                </fieldset>
            </Col>


        </Row>

    );
};
export default LoginPage;