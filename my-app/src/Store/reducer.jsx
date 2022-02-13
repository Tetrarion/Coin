import * as actions from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.COIN_ADD: 
      return [...state, {
        id: ++lastId,
        name: action.payload.name,
        count: action.payload.count,
        priceUsd: action.payload.priceUsd,
        key: action.payload.key
      }];
    case actions.COIN_REMOVE: {
      return state.filter(task => action.payload.id !== task.id);
    }
    default:
      return state;
  }
}