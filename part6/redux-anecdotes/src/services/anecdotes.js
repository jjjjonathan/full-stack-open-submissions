import axios from 'axios';

const url = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(url, object);
  return response.data;
};

const update = async (anecdote) => {
  const putUrl = `${url}/${anecdote.id}`;
  const response = await axios.put(putUrl, anecdote);
  return response.data;
};

const anecdoteService = { getAll, createNew, update };

export default anecdoteService;
