import { connect } from 'react-redux';
import { setComments } from '../actions';
import CommentBox from '../components/CommentBox';

const mapStateToProps = (state) => {
  return {
    url: "http://localhost:4567/api/comments",
    pollInterval: 2000,
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return { setComments: (comments) =>
    dispatch(setComments(comments))
  };
};

const SetComments = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBox);

export default SetComments;
