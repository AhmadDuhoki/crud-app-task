import React, { Component } from 'react';
import { Layout, Typography, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

export class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Title style={{ marginTop: '11px', color: 'white' }} level={2}>
              CRUD App
            </Title>
          </div>
          <div style={{ width: '10%' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Avatar
                style={{ marginRight: '10px', marginTop: '10px' }}
                size='large'
                src='https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg'
              />
              <div>
                <Link to='/'>
                  <Button type='primary' htmlType='submit'>
                    Logout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

export default HeaderComponent;
