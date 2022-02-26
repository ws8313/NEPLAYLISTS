import { createStore } from 'redux';
import combinedReducer from './stores/root';

let store = createStore(combinedReducer)

export default store

//store 하나당 하나의 파일