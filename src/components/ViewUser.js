import React, { Component } from 'react';
import { Button, Modal } from 'antd';

export class ViewUser extends Component {
  state = {
    isModalVisible: false,
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { id, name, username, email } = this.props.data;
    return (
      <>
        <Button type='link' onClick={this.showModal}>
          View User Info
        </Button>
        <Modal
          title='user informations'
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            <b>ID: </b>
            {id || ''}
          </p>
          <p>
            <b>Name: </b>
            {name || ''}
          </p>
          <p>
            <b>Username: </b>
            {username || ''}
          </p>
          <p>
            <b>Email: </b>
            {email || ''}
          </p>
        </Modal>
      </>
    );
  }
}

export default ViewUser;
