import * as actions from './actionTypes';
import { getInfo } from '../API/api';

export const loadCoin = (task) => async (dispatch) => {
  // eslint-disable-next-line no-use-before-define
  dispatch(addCoin({
    info: await getInfo(`assets/${task.id}`),
    count: task.count,
  }));
};
export const addCoin = (data) => ({
  type: actions.COIN_ADD,
  payload: {
    name: data.info.name,
    count: data.count,
    priceUsd: data.info.priceUsd,
    key: data.info.id,
  },
});
export const removeCoin = (id) => ({
  type: actions.COIN_REMOVE,
  payload: { id },
});
