import axios from 'axios';

const { BASE_URL } = process.env;

const axiosInstance = axios.create({
  baseURL: "https://api.coincap.io/v2/",
});

export default axiosInstance;
