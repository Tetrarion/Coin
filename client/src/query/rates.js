import { gql } from '@apollo/client';

export const GET_RATE = gql`
    query getRate($id: String) {
        getRate(id: $id) {
            id,
            symbol,
            currencySymbol,
            rateUsd,
            type
        }
    }
`;

export const GET_ALL_RATES = gql`
    query {
        getAllRates {
            id,
            symbol,
            currencySymbol,
            rateUsd,
            type
        }
    }
`;
