/* eslint-disable indent */

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        message: action.data,
        isError: true,
      };
    case 'SET_MESSAGE':
      return {
        message: action.data,
        isError: false,
      };
    case 'CLEAR_MESSAGE':
      return {
        message: '',
      };
    default:
      return state;
  }
};

let timeout;

export const timedErrorMessage = (message, seconds) => {
  return (dispatch) => {
    clearTimeout(timeout);

    dispatch({
      type: 'SET_ERROR',
      data: message,
    });

    timeout = setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE',
      });
    }, seconds * 1000);
  };
};

export const timedMessage = (message, seconds) => {
  return (dispatch) => {
    clearTimeout(timeout);

    dispatch({
      type: 'SET_MESSAGE',
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
