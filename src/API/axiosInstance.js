import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.coincap.io/v2/',
});

export default axiosInstance;
