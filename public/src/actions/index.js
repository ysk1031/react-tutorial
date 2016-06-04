export const setComments = (comments) => {
  return {
    type: "SET_COMMENTS",
    comments
  };
};

export const inputAuthor = (author) => {
  return {
    type: 'INPUT_AUTHOR',
    author
  };
};

export const inputText = (text) => {
  return {
    type: 'INPUT_TEXT',
    text
  };
};

export const clearInputForm = () => {
  return {
    type: 'CLEAR_INPUT_FORM'
  };
};
