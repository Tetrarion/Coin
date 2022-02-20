import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export async function getInfo(url) {
  try {
    const info = await axios.get(`https://api.coincap.io/v2/${url}`);
    return info.data.data;
  } catch (err) {
    return ' ';
  }
}
