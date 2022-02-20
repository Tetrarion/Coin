import * as actions from './actionTypes';

export const addCoin = (task) => ({
  type: actions.COIN_ADD,
  payload: {
    name: task.title.name,
    count: task.title.count,
    priceUsd: task.title.priceUsd,
    totalpriceUsd: task.title.totalpriceUsd,
    key: task.title.key,
  },
});
export const removeCoin = (id) => ({
  type: actions.COIN_REMOVE,
  payload: { id },
});
