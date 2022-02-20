import { createStore } from 'redux';
import reducer from './reducer';

const saveToLocalStorage = (state) => {
  try {
    return localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    return e;
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage();

const store = createStore(reducer, persistedStore);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
