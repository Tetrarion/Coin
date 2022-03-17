import axiosInstance from './axiosInstance';

const { REACT_APP_API_KEY } = process.env;

const header = {
  key: REACT_APP_API_KEY,
};

export default async function getInfo(url) {
  try {
    const info = await axiosInstance.get(`${url}`, header);
    return info.data.data;
  } catch (err) {
    return getInfo(url);
  }
}
