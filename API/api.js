import 'dotenv/config';
import axiosInstance from "./axiosInstance.js";

const header = {
  key: process.env.API_KEY,
  mode: 'no-cors',
};

export default async function getInfo(url) {
  try {
    const info = await axiosInstance.get(`${url}`, header);
    return info.data.data;
  } catch (err) {
    return getInfo(url);
  }
}
