import React from 'react';
import { render } from 'react-dom';
import CommentBox from './components/CommentBox';

render(
  <CommentBox url="http://localhost:4567/api/comments" pollInterval={2000} />,
  document.getElementById('container')
);
