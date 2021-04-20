/* eslint-disable indent */

import blogService from '../services/blogs';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      return [...state, action.data];
    case 'INIT_BLOGS':
      return action.data;
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== action.data);
    case 'UPDATE_BLOG':
      return state.map((blog) =>
        blog.id !== action.data.id ? blog : action.data
      );
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

export const deleteBlog = (id) => {
  return async (dispatch) => {
    await blogService.deleteOne(id);
    dispatch({
      type: 'DELETE_BLOG',
      data: id,
    });
  };
};

export const updateBlog = (id, blog) => {
  return async (dispatch) => {
    const updatedBlog = await blogService.update(id, blog);
    dispatch({
      type: 'UPDATE_BLOG',
      data: updatedBlog,
    });
  };
};

export default reducer;
