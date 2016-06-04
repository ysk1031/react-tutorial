import React from 'react';
import { render } from 'react-dom';
import CommentBox from './components/CommentBox';

import { createStore } from 'redux';
import commentReducer from './reducers';
import { Provider } from 'react-redux';

let store = createStore(commentReducer);

render(
  <Provider store={store}>
    <CommentBox url="http://localhost:4567/api/comments" pollInterval={2000} />,
    document.getElementById('container')
  </Provider>
);
