// eslint-disable-next-line import/prefer-default-export
export const sortCoins = (sortName, coins) => {
  const array = coins.slice();
  switch (sortName) {
    case 'Name':
      return array.sort((a, b) => {
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
    case 'Price':
      return array.sort((a, b) => a.priceUsd - b.priceUsd);
    case 'Rank':
      return array.sort((a, b) => a.rank - b.rank);
    case 'MarketCap':
      return array.sort((a, b) => a.marketCapUsd - b.marketCapUsd);
    case 'wap (24Hr)':
      return array.sort((a, b) => a.vwap24Hr - b.vwap24Hr);
    case 'Supply':
      return array.sort((a, b) => a.supply - b.supply);
    case 'Volume (24Hr)':
      return array.sort((a, b) => a.volumeUsd24Hr - b.volumeUsd24Hr);
    case 'Change (24Hr)':
      return array.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr);
    default:
      return '';
  }
};
