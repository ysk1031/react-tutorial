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

const CommentList = React.createClass({
  render() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

const CommentForm = React.createClass({
  render() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

render(
  <CommentBox />,
  document.getElementById('container')
);
