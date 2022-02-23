import * as actions from './actionTypes';

// eslint-disable-next-line default-param-last
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.COIN_ADD:
      return [...state, {
        // eslint-disable-next-line no-plusplus
        id: Math.random(),
        name: action.payload.name,
        count: action.payload.count,
        priceUsd: action.payload.priceUsd,
        coinTotalPrice: action.payload.coinTotalPrice,
        key: action.payload.key,
      }];
    case actions.COIN_REMOVE: {
      return state.filter((task) => action.payload.id !== task.id);
    }
    default:
      return state;
  }
}
