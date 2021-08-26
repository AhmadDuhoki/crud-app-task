import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import AddUser from './components/AddUser';
import HeaderComponent from './components/HeaderComponent';
import SiderComponent from './components/SiderComponent';
import FooterComponent from './components/FooterComponent';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UsersList from './components/UsersList';
import Login from './components/pages/Login';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Layout>
            <HeaderComponent />
            <Layout style={{ minHeight: '500' }}>
              <SiderComponent />
              <Layout style={{ padding: '0 24px 24px', marginTop: '20px' }}>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Route path='/users' component={UsersList}></Route>
                <Route path='/addUser/:id' component={AddUser}></Route>
                <FooterComponent />
              </Layout>
            </Layout>
          </Layout>
        </Switch>
      </>
    );
  }
}

export default App;
