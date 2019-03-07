import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers/index.js';
import App from './containers/App/App';
import './index.css';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, devTools);

const app = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));