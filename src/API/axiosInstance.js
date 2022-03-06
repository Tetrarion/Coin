import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.coincap.io/v2/assets/',
  // headers: {
  //   'Access-Control-Allow-Origin': 'https://api.coincap.io/v2/assets/',
  // },
});

export default axiosInstance;
