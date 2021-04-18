const reducer = (state = '', action) => {
  switch (action.type) {
    case 'MESSAGE':
      return action.data;
    case 'CLEAR_MESSAGE':
      return '';
    default:
      return state;
  }
};

export const setMessage = (message) => {
  return {
    type: 'MESSAGE',
    data: message,
  };
};

export const clearMessage = () => {
  return {
    type: 'CLEAR_MESSAGE',
  };
};

export default reducer;
