import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CommentActionCreators from '../actions';
import CommentForm from '../components/CommentForm';

const mapStateToProps = (state) => {
  return {
    inputParams: state.inputParams
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CommentActionCreators, dispatch);
};

const InputComment = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

export default InputComment;
