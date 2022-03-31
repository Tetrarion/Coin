import axiosInstance from "./axiosInstance.js";

const { API_KEY } = process.env;

const header = {
  key: '714d358f-ed54-4ffb-b0e1-45e7f27b372c',
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
