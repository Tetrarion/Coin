import priceDiff from "../src/utilities/priceDiff";

const newCoins = [
    {
        "priceUsd": 1234.54
    },
    {
        "priceUsd": 14.54
    },
    {
        "priceUsd": 76.54
    },
    {
        "priceUsd": 32.54
    },
    {
        "priceUsd": 134445.54
    }
]

const coinsInBasket = [
    {
        "priceUsd": 1230.28,
        "count": 3
    },
    {
        "priceUsd": 10.54,
        "count": 10
    },
    {
        "priceUsd": 88.24,
        "count": 18
    },
    {
        "priceUsd": 30.14,
        "count": 56
    },
    {
        "priceUsd": 130000.08,
        "count": 1.23
    }
]

const totalAmount = 131359.28;

test('Find price differences of two arrays', () => {
    expect(priceDiff(newCoins, coinsInBasket, totalAmount)).toBeCloseTo(41057.71);
});