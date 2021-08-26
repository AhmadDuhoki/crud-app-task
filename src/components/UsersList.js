import React, { Component } from 'react';
import UserServices from '../services/UserServices';
import { Table, Button, Popconfirm, Layout } from 'antd';
import ViewUser from './ViewUser';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

export class UsersList extends Component {
  state = {
    users: [],
    loading: false,
  };

  columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <div key={record.id}>
          <Link to={`/addUser/${record.id}`}>
            <Button type='link'>Update</Button>
          </Link>{' '}
          |
          <Popconfirm
            title='Sure to delete?'
            onConfirm={() => this.deleteUser(record.id)}
          >
            <Button type='link'>Delete</Button>
          </Popconfirm>{' '}
          |
          <ViewUser data={record} />
        </div>
      ),
    },
  ];

  deleteUser = (id) => {
    UserServices.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  };

  componentDidMount() {
    this.setState({ loading: true });
    UserServices.getUsers().then((res) => {
      this.setState({ users: res.data, loading: false });
    });
  }

  render() {
    return (
      <div>
        <Content
          className='site-layout-background'
          style={{
            padding: 24,
            margin: 0,
            minHeight: 777,
          }}
        >
          <Title style={{ margin: '10px' }} level={2}>
            Users List
          </Title>
          <Link to='/addUser/_add'>
            <Button
              style={{
                width: '200px',
                height: '40px',
                marginTop: '10px',
                marginLeft: '30px',
                marginBottom: '20px',
              }}
              type='primary'
            >
              Add a User
            </Button>
          </Link>
          <div className='info_card'>
            <Table
              loading={this.state.loading}
              columns={this.columns}
              dataSource={this.state.users}
              pagination={{
                pageSize: 5,
              }}
            />
          </div>
        </Content>
      </div>
    );
  }
}

export default UsersList;
