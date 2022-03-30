import { sortCoins } from '../../src/utilities/sortCoins';
import * as data from './sorting-data';

test('Sort array by name', () => {
  expect(sortCoins('Name', data.array)).toEqual(data.arraySortingByName);
});

test('Sort array by price', () => {
  expect(sortCoins('Price', data.array)).toEqual(data.arraySortingByPrice);
});
