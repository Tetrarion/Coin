import { sortCoins } from '../src/utilities/sortCoins';

const array = [
  {
    name: 'Apple',
    priceUsd: 12.32,
  },
  {
    name: 'Banana',
    priceUsd: 6.07,
  },
  {
    name: 'Raspbery',
    priceUsd: 22.67,
  },
  {
    name: 'Orange',
    priceUsd: 2.30,
  },
  {
    name: 'Watermelon',
    priceUsd: 56.98,
  },
];

const arraySortingByName = [
  {
    name: 'Apple',
    priceUsd: 12.32,
  },
  {
    name: 'Banana',
    priceUsd: 6.07,
  },
  {
    name: 'Orange',
    priceUsd: 2.30,
  },
  {
    name: 'Raspbery',
    priceUsd: 22.67,
  },
  {
    name: 'Watermelon',
    priceUsd: 56.98,
  },
];

const arraySortingByPrice = [
  {
    name: 'Orange',
    priceUsd: 2.30,
  },
  {
    name: 'Banana',
    priceUsd: 6.07,
  },
  {
    name: 'Apple',
    priceUsd: 12.32,
  },
  {
    name: 'Raspbery',
    priceUsd: 22.67,
  },
  {
    name: 'Watermelon',
    priceUsd: 56.98,
  },
];

test('Sort array by name', () => {
  expect(sortCoins('Name', array)).toEqual(arraySortingByName);
});

test('Sort array by price', () => {
  expect(sortCoins('Price', array)).toEqual(arraySortingByPrice);
});
