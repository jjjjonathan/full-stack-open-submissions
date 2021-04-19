import React from 'react';
import { useDispatch } from 'react-redux';
import { createNew } from '../reducers/anecdoteReducer';
import { setMessage, clearMessage } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const create = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(createNew(content));
    dispatch(setMessage(`Created "${content}"`));
    setTimeout(() => dispatch(clearMessage()), 5000);
    event.target.anecdote.value = '';
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
