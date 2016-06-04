const commentReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return { comments: [...state.comments, action.comment] };
    case "SET_COMMENTS":
      return { comments: action.comments };
    default:

  }
};

export default commentReducer;
