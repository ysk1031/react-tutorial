import React from 'react';
import request from 'superagent';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  loadCommentsFromServer () {
    request
      .get(this.props.url)
      .end((error, response) =>
        this.setState({data: JSON.parse(response.text)}));
  }
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
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
