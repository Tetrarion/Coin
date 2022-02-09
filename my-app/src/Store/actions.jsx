import * as actions from './actionTypes';

export const addCoin = ( task ) => ({
    type: actions.COIN_ADD,
    payload: {
      name: task.title.name,
      count: task.title.count,
      price: task.title.price
    }
  });
export const removeCoin = id => ({
    type: actions.COIN_REMOVE,
    payload: { id }
  });