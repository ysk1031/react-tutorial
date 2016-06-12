import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import commentReducer from './reducers';
import { Provider } from 'react-redux';

const logger = createLogger();
const store = createStore(
  commentReducer,
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
