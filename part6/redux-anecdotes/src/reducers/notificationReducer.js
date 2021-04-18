const initialState = 'Hello world!';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGE':
      return action.data;
    default:
      return state;
  }
};

export const message = (message) => {
  return {
    type: 'MESSAGE',
    data: message,
  };
};

export default reducer;
