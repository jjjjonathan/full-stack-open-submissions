import anecdoteService from '../services/anecdotes';

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

export const voteFor = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    const updatedAnecdote = await anecdoteService.update(newAnecdote);
    dispatch({
      type: 'VOTE',
      data: { id: updatedAnecdote.id },
    });
  };
};

export const createNew = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: 'CREATE',
      data: newAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

export default reducer;
