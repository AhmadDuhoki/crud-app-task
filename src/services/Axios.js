import axios from 'axios';

const USER_API_BASE_URL = 'https://retoolapi.dev/trrWjh/users';
// const USER_API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const axiosInstance = axios.create({ baseURL: USER_API_BASE_URL });

export default axiosInstance;
