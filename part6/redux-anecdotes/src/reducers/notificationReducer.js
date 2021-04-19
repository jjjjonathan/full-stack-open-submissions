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

export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    dispatch({
      type: 'MESSAGE',
      data: message,
    });

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE',
      });
    }, seconds * 1000);
  };
};

export default reducer;
