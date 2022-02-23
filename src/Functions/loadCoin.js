import { getInfo } from '../API/api';
import * as actions from '../Store/actions';

const getCount = (target) => {
  const input = target.querySelector('input');
  const count = Number(input.value);
  input.value = '';
  // eslint-disable-next-line consistent-return
  return count;
};
// eslint-disable-next-line import/prefer-default-export
export const loadCoin = (id, target) => async (dispatch) => {
  const count = getCount(target);
  if (count === 0 || count === ' ') return;
  const response = await getInfo(`assets/${id}`);
  const coinTotalPrice = response.priceUsd * count;
  dispatch(actions.addCoin({
    response,
    count,
    coinTotalPrice,
  }));
};
