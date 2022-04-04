import { sortCoins } from '../../utilities/sortCoins';
import * as data from './sorting-data';

test('Sort array by name', () => {
  expect(sortCoins('Name', data.array)).toEqual(data.arraySortingByName);
});

test('Sort array by price', () => {
  expect(sortCoins('Price', data.array, 2, 2)).toEqual(data.arraySortingByPrice);
});
