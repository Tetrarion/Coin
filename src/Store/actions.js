import * as actions from './actionTypes';
import getInfo from '../API/api';

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
  if (count === 0 || typeof count !== 'number' || count < 0) return;
  const coinResponse = await getInfo(`assets/${id}`);
  const rateResponse = await getInfo(`rates/${rateId}`);
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
