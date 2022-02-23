import axiosInstance from './axiosInstance';

// eslint-disable-next-line import/prefer-default-export
export async function getInfo(url) {
  try {
    const info = await axiosInstance.get(`${url}`);
    return info.data.data;
  } catch (err) {
    return getInfo(url);
  }
}
