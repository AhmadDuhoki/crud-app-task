import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export class FooterComponent extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        CRUD App Using React & Ant Design
      </Footer>
    );
  }
}

export default FooterComponent;
