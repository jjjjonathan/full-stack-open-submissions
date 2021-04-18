const reducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data;
    default:
      return state;
  }
};

export const filter = (query) => {
  return {
    type: 'FILTER',
    data: query,
  };
};

export default reducer;
