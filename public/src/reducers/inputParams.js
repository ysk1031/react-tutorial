const inputParams = (state = { author: '', text: '' }, action) => {
  switch (action.type) {
    case 'INPUT_AUTHOR':
      return Object.assign({}, state, {
        author: action.author
      });
    case 'INPUT_TEXT':
      return Object.assign({}, state, {
        text: action.text
      });
    case 'CLEAR_INPUT_FORM':
      return { author: '', text: '' };
    default:
      return state;
  }
};

export default inputParams;
