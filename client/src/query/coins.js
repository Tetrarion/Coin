import { gql } from '@apollo/client';

export const GET_CURRENT_COINS_FOR_HEADER = gql`
    query getCurrentCoins($firstIndex: Int, $coinsPerPage: Int) { 
        getCurrentCoins(firstIndex: $firstIndex, coinsPerPage: $coinsPerPage) {
            id,
            rank,
            symbol,
            name,
            priceUsd,
        }
}
`;

export const GET_CURRENT_COINS = gql`
    query getCurrentCoins($firstIndex: Int, $coinsPerPage: Int) { 
        getCurrentCoins(firstIndex: $firstIndex, coinsPerPage: $coinsPerPage) {
            id,
            rank,
            symbol,
            name,
            supply,
            maxSupply,
            marketCapUsd,
            volumeUsd24Hr,
            priceUsd,
            changePercent24Hr,
            vwap24Hr
        }
    }
`;

export const GET_COIN = gql`
    query getCoin($id: String) { 
        getCoin(id: $id) {
            id,
            rank,
            symbol,
            name,
            supply,
            maxSupply,
            marketCapUsd,
            volumeUsd24Hr,
            priceUsd,
            changePercent24Hr,
            vwap24Hr
        }
    }
`;

export const GET_COIN_PRICE = gql`
    query getCoin($id: String) {
        getCoin(id: $id) {
            id,
            name,
            priceUsd
        }
    }
`;

export const GET_CURRENT_SEARCHED_COINS = gql`
    query getCurrentSearchedCoins($search: String, $firstIndex: Int, $coinsPerPage: Int) { 
        getCurrentSearchedCoins(search: $search, firstIndex: $firstIndex, coinsPerPage: $coinsPerPage) {
            id,
            rank,
            symbol,
            name,
            supply,
            maxSupply,
            marketCapUsd,
            volumeUsd24Hr,
            priceUsd,
            changePercent24Hr,
            vwap24Hr
        }
    }
`;

export const GET_SEARCHED_COINS = gql`
    query getSearchedCoins($search: String) { 
        getSearchedCoins(search: $search) {
            id
        }
    }
`;

export const GET_CURRENT_SORTED_COINS = gql`
    query getCurrentSortedCoins($sortingName: String, $firstIndex: Int, $coinsPerPage: Int) {
        getCurrentSortedCoins(sortingName: $sortingName, firstIndex: $firstIndex, coinsPerPage: $coinsPerPage) {
            id,
            rank,
            symbol,
            name,
            supply,
            maxSupply,
            marketCapUsd,
            volumeUsd24Hr,
            priceUsd,
            changePercent24Hr,
            vwap24Hr
        }
    }
`;
