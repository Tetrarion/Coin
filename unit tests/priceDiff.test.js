import priceDiff from '../src/utilities/priceDiff';

const newCoins = [
  {
    id: 1,
    priceUsd: 1234.54,
  },
  {
    id: 2,
    priceUsd: 14.54,
  },
  {
    id: 3,
    priceUsd: 76.54,
  },
  {
    id: 4,
    priceUsd: 32.54,
  },
  {
    id: 5,
    priceUsd: 134445.54,
  },
];

const coinsInBasket = [
  {
    key: 1,
    priceUsd: 1230.28,
    count: 3,
  },
  {
    key: 2,
    priceUsd: 10.54,
    count: 10,
  },
  {
    key: 3,
    priceUsd: 88.24,
    count: 18,
  },
  {
    key: 4,
    priceUsd: 30.14,
    count: 56,
  },
  {
    key: 5,
    priceUsd: 130000.08,
    count: 1.23,
  },
];

const totalAmount = 131359.28;

test('Find price differences of two arrays', () => {
  expect(priceDiff(newCoins, coinsInBasket, totalAmount)).toBeCloseTo(-41057.71);
});
