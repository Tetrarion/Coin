// eslint-disable-next-line import/prefer-default-export
export const sortCoins = (sortName, coins) => {
  switch (sortName) {
    case 'name':
      return coins.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    case 'price':
      return coins.sort((a, b) => a.priceUsd - b.priceUsd);
    default:
      return coins;
  }
};
