import * as actions from './actionTypes';

export const addCoin = (data) => ({
  type: actions.COIN_ADD,
  payload: {
    name: data.response.name,
    count: data.count,
    priceUsd: data.response.priceUsd,
    coinTotalPrice: data.coinTotalPrice,
    key: data.response.id,
  },
});
export const removeCoin = (id) => ({
  type: actions.COIN_REMOVE,
  payload: { id },
});