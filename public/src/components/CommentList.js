import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const commentNodes = this.props.data.map((comment) =>
      <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>);
    return (
      <div className="commentList">{commentNodes}</div>
    );
  }
}
