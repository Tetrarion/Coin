export const sortCoins = (sortName, coins, firstIndex, coinsPerPage) => {
  const lastIndex = firstIndex + coinsPerPage;
  const array = coins.slice();
  switch (sortName) {
    case 'Name':
    case 'Name down':
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
      }).slice(firstIndex, lastIndex);
    case 'Name up':
      return array.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        return 0;
      }).slice(firstIndex, lastIndex);
    case 'Price':
    case 'Price down':
      return array.sort((a, b) => a.priceUsd - b.priceUsd).slice(firstIndex, lastIndex);
    case 'Price up':
      return array.sort((a, b) => b.priceUsd - a.priceUsd).slice(firstIndex, lastIndex);
    case 'Rank':
    case 'Rank down':
      return array.sort((a, b) => b.rank - a.rank).slice(firstIndex, lastIndex);
    case 'Rank up':
      return [];
    case 'MarketCap':
    case 'MarketCap down':
      return array.sort((a, b) => a.marketCapUsd - b.marketCapUsd).slice(firstIndex, lastIndex);
    case 'MarketCap up':
      return array.sort((a, b) => b.marketCapUsd - a.marketCapUsd).slice(firstIndex, lastIndex);
    case 'wap (24Hr)':
    case 'wap (24Hr) down':
      return array.sort((a, b) => a.vwap24Hr - b.vwap24Hr).slice(firstIndex, lastIndex);
    case 'wap (24Hr) up':
      return array.sort((a, b) => b.vwap24Hr - a.vwap24Hr).slice(firstIndex, lastIndex);
    case 'Supply':
    case 'Supply down':
      return array.sort((a, b) => a.supply - b.supply).slice(firstIndex, lastIndex);
    case 'Supply up':
      return array.sort((a, b) => b.supply - a.supply).slice(firstIndex, lastIndex);
    case 'Volume (24Hr)':
    case 'Volume (24Hr) down':
      return array.sort((a, b) => a.volumeUsd24Hr - b.volumeUsd24Hr).slice(firstIndex, lastIndex);
    case 'Volume (24Hr) up':
      return array.sort((a, b) => b.volumeUsd24Hr - a.volumeUsd24Hr).slice(firstIndex, lastIndex);
    case 'Change (24Hr)':
    case 'Change (24Hr) down':
      return array.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr).slice(firstIndex, lastIndex);
    case 'Change (24Hr) up':
      return array.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr).slice(firstIndex, lastIndex);
    default:
      return '';
  }
};
