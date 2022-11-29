import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const Register = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    
      return (
        
        <Form
          name="normal_login"
          className="login-form w-[400px] m-auto"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h1 className="text-[28px] mb-6">Đăng ký tài khoản</h1>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Phone Number!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Repeat Password"
            />
          </Form.Item>
          <Form.Item className="">
            <b>Mật khẩu bao gồm</b>
            <p className="mt-2">
                <svg className="w-[14px] inline-block mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                Ít nhất 8 ký tự
            </p>
            <p className="my-2">
                <svg className="w-[14px] inline-block mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                Chữ hoa & chữ thường
            </p>
            <p className="">
                <svg className="w-[14px] inline-block mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                Ít nhất 1 số
            </p>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="mb-5" >Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ từ VinFast</Checkbox>
          </Form.Item>
          <Form.Item name="remember">
            <p>Bằng việc bấm nút Đăng ký bên dưới, tôi xác nhận đã đọc, hiểu và đồng ý với các <a href="#" className="underline text-[#cfb4dd]">Điều kiện và Điều khoản</a> của VinFast.</p>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button bg-[#02b875] w-full ">
              Đăng ký
            </Button>
            <p className="my-5 text-[#02b875] text-center">Đã có tài khoản?</p>
            <Button className="w-full">Đăng nhập</Button>
          </Form.Item>
        </Form>
      );
};

export default Register;
