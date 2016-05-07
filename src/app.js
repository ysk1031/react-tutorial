import React from 'react';
import { render } from 'react-dom';
import marked from 'marked';
import axios from 'axios';

axios.defaults.baseURL = "http://0.0.0.0:4567";

const CommentBox = React.createClass({
  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then((response) =>
        this.setState({data: response.data}))
      .catch((response) =>
        console.error(this.props.url, response.status, response.statusText))
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
      <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
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
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('container')
);
