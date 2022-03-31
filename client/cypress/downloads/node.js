/* eslint-disable consistent-return */
const { default: axios } = require('axios');
const fs = require('fs');

async function getInfo(url) {
  try {
    const info = await axios.get(`https://api.coincap.io/v2/${url}`);
    return info.data.data;
  } catch (err) {
    return getInfo(url);
  }
}

const coins = async () => {
  let responce = await getInfo('assets?limit=2000');
  responce = JSON.stringify(responce);
  fs.writeFile('coins.json', `${responce}`, (err) => {
    if (err) return console.log(err);
  });
};

coins();
