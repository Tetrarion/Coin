import { gql } from '@apollo/client';

export const GET_RATE_INFO = gql`
    query getRate($id: String) {
        getRate(id: $id) {
            id,
            symbol,
            currencySymbol,
            rateUsd
        }
    }
`;

export const GET_RATE = gql`
    query getRate($id: String) {
        getRate(id: $id) {
            rateUsd,
            currencySymbol,
        }
}
`;

export const GET_ALL_RATES_INFO = gql`
    query {
        getAllRates {
            id,
            symbol,
            currencySymbol,
            rateUsd
        }
    }
`;
