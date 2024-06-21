import { createStore } from 'redux';
import favoriteReducer from './reducers';

const store = createStore(favoriteReducer);

export default store;
