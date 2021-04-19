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

let timeout;

export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    clearTimeout(timeout);

    dispatch({
      type: 'MESSAGE',
      data: message,
    });

    timeout = setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE',
      });
    }, seconds * 1000);
  };
};

export default reducer;
