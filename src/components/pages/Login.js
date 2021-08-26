import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Lottie from 'react-lottie';
import animationData from '../lotties/DoneCheckAnimation.json';

export class Login extends Component {
  state = {
    isLoading: false,
  };

  handleLoader = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
      this.props.history.push('/dashboard');
    }, 1700);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleLoader();
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <>
        {this.state.isLoading ? (
          <div className='spinner'>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        ) : (
          <div className='login_center'>
            <Form
              onSubmitCapture={(e) => this.handleSubmit(e)}
              name='basic'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: false }}
            >
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='remember'
                valuePropName='checked'
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </>
    );
  }
}

export default Login;
