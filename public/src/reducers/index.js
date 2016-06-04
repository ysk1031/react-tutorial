import { combineReducers } from 'redux';
import comments from './comments';
import inputParams from './inputParams';

const commentReducer = combineReducers({
  comments,
  inputParams
});

export default commentReducer;
