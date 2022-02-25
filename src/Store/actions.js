import * as actions from './actionTypes';
import getInfo from '../API/api';

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
export const loadCoin = (id, count) => async (dispatch) => {
  if (count === 0 || count === ' ') return;
  const response = await getInfo(`assets/${id}`);
  const coinTotalPrice = response.priceUsd * count;
  dispatch(addCoin({
    response,
    count,
    coinTotalPrice,
  }));
};
