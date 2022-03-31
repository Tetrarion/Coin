import { useQuery } from '@apollo/client';
import * as actions from './actionTypes';
import { GET_RATE } from '../query/rates';
import { GET_COIN } from '../query/coins';

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
  const { data: rate } = useQuery(GET_RATE, {
    variables: {
      id: rateId,
    },
  });
  const { data: coin } = useQuery(GET_COIN, {
    variables: {
      id,
    },
  });
  const coinResponse = coin.getCoin;
  const rateResponse = rate.getRate;
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
