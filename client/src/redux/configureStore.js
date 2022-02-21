import { createStore } from 'redux';
import combinedReducer from './module/root';

let store = createStore(combinedReducer)

export default store