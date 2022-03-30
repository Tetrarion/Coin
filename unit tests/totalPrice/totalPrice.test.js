import getTotalPrice from '../../src/utilities/totalprice';
import * as data from './totalPrice-data';

test('Adds total price of each coin', () => {
  expect(getTotalPrice(data.coins)).toBeCloseTo(242492.21);
});
