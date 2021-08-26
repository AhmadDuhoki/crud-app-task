import axios from './Axios';

class UserServices {
  getUsers() {
    return axios.get('');
  }

  createUser(user) {
    return axios.post('', user);
  }

  getUserById(id) {
    return axios.get('/' + id);
  }

  updateUser(user, id) {
    return axios.put('/' + id, user);
  }

  deleteUser(id) {
    return axios.delete('/' + id);
  }
}

export default new UserServices();
