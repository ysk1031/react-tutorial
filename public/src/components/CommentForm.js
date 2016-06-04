import React from 'react';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.props.inputAuthor(e.target.value);
  }
  handleTextChange(e) {
    this.props.inputText(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    const author = this.props.inputParams.author.trim();
    const text = this.props.inputParams.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.props.clearInputForm();
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.props.inputParams.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.props.inputParams.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
