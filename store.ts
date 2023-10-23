// src/redux/store.ts
import { createStore } from 'redux';
import authReducer from './reducer'; // Create your rootReducer

const store = createStore(authReducer);

export default store;
