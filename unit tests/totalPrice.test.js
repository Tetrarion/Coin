import getTotalPrice from "../src/utilities/totalprice";

const coins = [
    {
        "name": "Bitcoin",
        "coinTotalPriceUsd": 3456.32
    },
    {
        "name": "Ethereum",
        "coinTotalPriceUsd": 1234.34
    },
    {
        "name": "Tether",
        "coinTotalPriceUsd": 235456.32
    },
    {
        "name": "BNB",
        "coinTotalPriceUsd": 2345.23
    }
]

test('Adds total price of each coin', () => {
    expect(getTotalPrice(coins)).toBeCloseTo(242492.21);
});