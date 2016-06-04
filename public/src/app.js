import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

import { createStore } from 'redux';
import commentReducer from './reducers';
import { Provider } from 'react-redux';

let store = createStore(commentReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
