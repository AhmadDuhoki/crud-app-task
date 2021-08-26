import React, { Component } from 'react';
import UserServices from '../services/UserServices';
import { Button, Layout, Typography } from 'antd';
// import { Form, Input } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

export class AddUser extends Component {
  state = {
    id: this.props.match.params.id,
    name: '',
    username: '',
    email: '',
    errMsg: '',
  };
  componentDidMount() {
    if (this.state.id === '_add') {
      return;
    } else {
      UserServices.getUserById(this.state.id)
        .then((res) => {
          let user = res.data;
          this.setState({
            name: user.name,
            username: user.username,
            email: user.email,
          });
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ errMsg: err.message });
        });
    }
  }

  handleChnage = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = (e) => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
    };
    if (this.state.id === '_add') {
      UserServices.createUser(user)
        .then((res) => {
          this.props.history.push('/users');
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ errMsg: err.message });
        });
    } else {
      UserServices.updateUser(user, this.state.id)
        .then((res) => {
          this.props.history.push('/users');
        })
        .catch((err) => {
          console.log(err.message);
          this.setState({ errMsg: err.message });
        });
    }
  };

  cancel = () => {
    this.props.history.push('/users');
  };

  render() {
    return (
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 777,
        }}
      >
        {this.state.errMsg ? (
          <div>{this.state.errMsg}</div>
        ) : (
          <div className='center info_card'>
            <div className='title'>
              {this.state.id === '_add' ? (
                <Title style={{ margin: '10px' }} level={2}>
                  Add a New User
                </Title>
              ) : (
                <Title style={{ margin: '10px' }} level={2}>
                  Update User
                </Title>
              )}
            </div>
            <form onSubmit={this.handleSave}>
              <div className='text_field'>
                <input
                  required
                  placeholder='Name'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChnage}
                />
              </div>
              <div className='text_field'>
                <input
                  required
                  placeholder='Username'
                  name='username'
                  value={this.state.username}
                  onChange={this.handleChnage}
                />
              </div>
              <div className='text_field'>
                <input
                  type='email'
                  required
                  placeholder='Email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChnage}
                />
              </div>

              <Button type='primary' htmlType='submit'>
                Save
              </Button>
              <Button
                style={{ marginLeft: '10px', marginTop: '20px' }}
                onClick={this.cancel}
                type='default'
              >
                Cancel
              </Button>
            </form>
          </div>
        )}
        {/* {this.state && (
          <Form
            initialValues={{
              name: this.state.name,
              username: this.state.username,
              email: this.state.email,
            }}
            name='userForm'
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 7 }}
          >
            <Form.Item
              label='Name'
              name='name'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                label='Name'
                name='name'
                defaultValue={this.state.name}
                placeholder='Enter your Name'
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
                label='Username'
                name='username'
                defaultValue={this.state.username}
                placeholder='Enter your Username'
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
                label='Email'
                name='email'
                defaultValue={this.state.email}
                placeholder='Enter your Email'
                onChange={(e) => this.handleChnage(e)}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 11 }}>
              <Button
                type='primary'
                htmlType='submit'
                onClick={this.handleSave}
              >
                Save
              </Button>
              <Button
                style={{ marginLeft: '5px' }}
                onClick={this.cancel}
                type='default'
              >
                Cancel
              </Button>
            </Form.Item>
          </Form>
        )} */}
      </Content>
    );
  }
}

export default AddUser;
