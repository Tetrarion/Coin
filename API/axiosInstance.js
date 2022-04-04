import 'dotenv/config';
import axios from 'axios';

const { BASE_URL } = process.env;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
