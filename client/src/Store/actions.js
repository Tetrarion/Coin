import * as actions from './actionTypes';
import { GET_RATE } from '../query/rates';
import { GET_COIN_PRICE } from '../query/coins';
import { client } from '../client';

export const addCoin = (data) => ({
  type: actions.COIN_ADD,
  payload: {
    name: data.coinResponse.name,
    symbol: data.rateResponse.currencySymbol,
    count: data.count,
    price: data.price,
    coinTotalPrice: data.coinTotalPrice,
    coinTotalPriceUsd: data.coinTotalPriceUsd,
    key: data.coinResponse.id,
  },
});
export const removeCoin = (id) => ({
  type: actions.COIN_REMOVE,
  payload: { id },
});
export const loadCoin = (id, count, message, rateId) => async (dispatch) => {
  let coinResponse = await client.query({
    query: GET_COIN_PRICE,
    variables: {
      id,
    },
  });
  let rateResponse = await client.query({
    query: GET_RATE,
    variables: {
      id: rateId,
    },
  });
  coinResponse = coinResponse.data.getCoin;
  rateResponse = rateResponse.data.getRate;
  const coinTotalPrice = coinResponse.priceUsd * count * rateResponse.rateUsd;
  const coinTotalPriceUsd = coinResponse.priceUsd * count;
  const price = coinResponse.priceUsd * rateResponse.rateUsd;
  dispatch(addCoin({
    rateResponse,
    coinResponse,
    count,
    price,
    coinTotalPrice,
    coinTotalPriceUsd,
  }));
  message.classList.remove('message--hidden');
  setTimeout(() => message.classList.add('message--hidden'), 3000);
};
