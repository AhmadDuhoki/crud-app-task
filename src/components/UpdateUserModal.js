import React, { Component } from 'react';
import { Button, Modal, Form, Input } from 'antd';

export class UpdateUserModal extends Component {
  state = [
    {
      id: this.props.data.id,
      name: this.props.data.name,
      username: this.props.data.username,
      email: this.props.data.email,
      isModalVisible: false,
    },
  ];

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  handleChnage = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Button type='link' onClick={this.showModal}>
          Update
        </Button>
        <Modal
          title='user informations'
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            onSubmitCapture={this.handleSave}
            name='userForm'
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 13 }}
          >
            <Form.Item
              label='Name'
              name='name'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                value={this.state.name}
                label='Name'
                name='name'
                onChange={(e) => this.handleChnage(e)}
              />
            </Form.Item>

            <Form.Item
              label='Username'
              name='username'
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input
                value={this.state.username}
                label='Username'
                name='username'
                onChange={(e) => this.handleChnage(e)}
              />
            </Form.Item>

            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                  type: 'email',
                },
              ]}
            >
              <Input
                value={this.state.email}
                label='Email'
                name='email'
                onChange={(e) => this.handleChnage(e)}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 12 }}>
              <Button type='primary' htmlType='submit'>
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default UpdateUserModal;
