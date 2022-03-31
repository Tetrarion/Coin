import priceDiff from '../../src/utilities/priceDiff';
import * as data from './priceDiff-data';

const totalAmount = 131359.28;

test('Find price differences of two arrays', () => {
  expect(priceDiff(data.newCoins, data.coinsInBasket, totalAmount)).toBeCloseTo(-41057.71);
});
