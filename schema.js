import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Coin {
    id: String
    rank: Int
    symbol: String
    name: String
    supply: Float
    maxSupply: Float
    marketCapUsd: Float
    volumeUsd24Hr: Float
    priceUsd: Float
    changePercent24Hr: Float
    vwap24Hr: Float
  }

  type Rate {
    id: String
    symbol: String
    currencySymbol: String
    rateUsd: Float
    type: String
  }

  type Point {
    priceUsd: Float
    date: String
  }

  type Query {
      getCoin(id: String): Coin 
      getCurrentCoins(firstIndex: Int, coinsPerPage: Int): [Coin]
      getRate(id: String): Rate
      getAllRates: [Rate]
      getHistory(id: String, interval: String): [Point]
      getCurrentSearchedCoins(search: String, firstIndex: Int, coinsPerPage: Int): [Coin]
      getSearchedCoins(search: String): [Coin]
      getCurrentSortedCoins(sortingName: String, firstIndex: Int, coinsPerPage: Int): [Coin]
  }
`);
