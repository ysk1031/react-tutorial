import React from 'react';
import { render } from 'react-dom';
import marked from 'marked';

const CommentBox = React.createClass({
  getInitialState() {
    return {data: []};
  },
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

const CommentList = React.createClass({
  render() {
    const commentNodes = this.props.data.map((comment) =>
      <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>);
    return (
      <div className="commentList">{commentNodes}</div>
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

const Comment = React.createClass({
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

render(
  <CommentBox url="/api/comments" />,
  document.getElementById('container')
);
