/* eslint-disable indent */

import blogService from '../services/blogs';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      return [...state, action.data];
    case 'INIT_BLOGS':
      return action.data;
    default:
      return state;
  }
};

export const createBlog = (blog) => {
  return async (dispatch) => {
    const response = await blogService.create(blog);
    console.log(response);
    dispatch({
      type: 'CREATE_BLOG',
      data: response,
    });
  };
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    const response = await blogService.getAll();
    dispatch({
      type: 'INIT_BLOGS',
      data: response,
    });
  };
};

export default reducer;
