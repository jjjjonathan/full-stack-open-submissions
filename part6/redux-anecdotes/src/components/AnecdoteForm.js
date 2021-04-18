import React from 'react';
import { useDispatch } from 'react-redux';
import { createNew } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const create = (event) => {
    event.preventDefault();
    console.log('creating', event.target.anecdote.value);
    dispatch(createNew(event.target.anecdote.value));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
