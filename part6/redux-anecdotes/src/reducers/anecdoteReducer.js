const getId = () => (100000 * Math.random()).toFixed(0);

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      return state.map((anecdote) => {
        if (anecdote.id === action.data.id) {
          return {
            ...anecdote,
            votes: anecdote.votes + 1,
          };
        } else {
          return anecdote;
        }
      });
    case 'CREATE':
      return [...state, action.data];
    case 'INIT_ANECDOTES':
      return action.data;
    default:
      return state;
  }
};

export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: { id },
  };
};

export const createNew = (content) => {
  return {
    type: 'CREATE',
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  };
};

export default reducer;
