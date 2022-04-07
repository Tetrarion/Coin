import 'dotenv/config';
import axiosInstance from "./axiosInstance.js";

const { API_KEY } = process.env;

const header = {
  key: API_KEY,
  mode: 'no-cors',
  'Content-Type': 'application/json',
};

export default async function getInfo(url) {
  try {
    const info = await axiosInstance.get(`${url}`, header);
    return info.data.data;
  } catch (err) {
    return err;
  }
}
