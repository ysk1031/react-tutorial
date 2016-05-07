import React from 'react';
import { render } from 'react-dom';
import marked from 'marked';
import request from 'superagent';

const CommentBox = React.createClass({
  loadCommentsFromServer() {
    request
      .get(this.props.url)
      .end((error, response) =>
        this.setState({data: JSON.parse(response.text)}));
  },
  handleCommentSubmit(comment) {
    const comments = this.state.data;
    comment.id = Date.now();
    const newComments = [...comments, comment];
    this.setState({data: newComments});

    request
      .post(this.props.url)
      .send(comment)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .end((error, response) => {
        if (error !== null) {
          this.setState({data: comments});
        } else {
          this.setState({data: JSON.parse(response.text)});
        }
      });
  },
  getInitialState() {
    return {data: []};
  },
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
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
  getInitialState() {
    return {
      'author': '',
      'text': ''
    };
  },
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({
      'author': '',
      'text': ''
    });
  },
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
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
  <CommentBox url="http://localhost:4567/api/comments" pollInterval={2000} />,
  document.getElementById('container')
);
