import * as actions from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.COIN_ADD: 
      return [...state, {
        id: ++lastId,
        name: action.payload.name,
        count: action.payload.count,
        price: action.payload.price,
      }];
    case actions.COIN_REMOVE: {
      state = state.filter(task => action.payload.id !== task.id);
      localStorage.setItem('state', JSON.stringify(state));
      return state;
    }
    default:
      return state;
  }
}