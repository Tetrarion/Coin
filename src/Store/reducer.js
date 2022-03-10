import * as actions from './actionTypes';

// eslint-disable-next-line default-param-last
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.COIN_ADD:
      return [...state, {
        id: Math.random(),
        name: action.payload.name,
        symbol: action.payload.symbol,
        count: action.payload.count,
        price: action.payload.price,
        coinTotalPrice: action.payload.coinTotalPrice,
        coinTotalPriceUsd: action.payload.coinTotalPriceUsd,
        key: action.payload.key,
      }];
    case actions.COIN_REMOVE: {
      return state.filter((task) => action.payload.id !== task.id);
    }
    default:
      return state;
  }
}
