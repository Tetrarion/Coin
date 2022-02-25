import axiosInstance from './axiosInstance';

export default async function getInfo(url) {
  try {
    const info = await axiosInstance.get(`${url}`);
    return info.data.data;
  } catch (err) {
    return getInfo(url);
  }
}
