import { gql } from '@apollo/client';

export const GET_HISTORY = gql`
    query getHistory($id: String, $interval: String) {
        getHistory(id: $id, interval: $interval) {
            priceUsd, time
        }
    }
`;
