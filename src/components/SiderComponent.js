import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

export class SiderComponent extends Component {
  render() {
    return (
      <Sider width={280} className='site-layout-background'>
        <Menu
          style={{ minHeight: '600' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['1']}
          mode='inline'
          theme='light'
        >
          <Menu.Item key='1'>
            <Link to='/dashboard'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/users'>Users</Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/addUser/_add'>Add a User</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderComponent;
