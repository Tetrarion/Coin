import * as actions from './actionTypes';

export const addCoin = ( task ) => ({
    type: actions.COIN_ADD,
    payload: {
      name: task.title.name,
      count: task.title.count,
      price: task.title.price,
      key: task.title.key
    }
  });
export const removeCoin = id => ({
    type: actions.COIN_REMOVE,
    payload: { id }
  });