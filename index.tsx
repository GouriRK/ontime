import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css'; // Import your CSS file
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import authReducer from './redux/reducer'; // Import your Redux reducers
import App from './App'; // Import your root React component

// Create a Redux store
const store = createStore(authReducer);

// Render your app, wrapping it with the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
