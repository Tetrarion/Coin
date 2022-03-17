import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

export default axiosInstance;
