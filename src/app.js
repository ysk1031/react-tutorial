import React from 'react';
import { render } from 'react-dom';

const CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

render(
  <CommentBox />,
  document.getElementById('container')
);
