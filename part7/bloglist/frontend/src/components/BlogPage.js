import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updateBlog, deleteBlog } from '../reducers/blogReducer';
import {
  timedMessage,
  timedErrorMessage,
} from '../reducers/notificationReducer';

const BlogPage = () => {
  const id = useParams().id;
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((blog) => blog.id === id);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async () => {
    if (window.confirm(`Delete ${blog.title}?`)) {
      try {
        dispatch(deleteBlog(blog.id));
        dispatch(timedMessage(`Successfully deleted ${blog.title}`, 3));
        history.push('/');
      } catch (error) {
        console.log({ error });
        dispatch(timedErrorMessage('Error deleting blog!', 3));
      }
    }
  };

  const deleteButton = () => {
    if (user.username === blog.user.username) {
      return <button onClick={handleDelete}>Delete</button>;
    } else {
      return null;
    }
  };

  const handleLikeButton = async () => {
    try {
      dispatch(
        updateBlog(blog.id, {
          author: blog.author,
          title: blog.title,
          url: blog.url,
          likes: blog.likes + 1,
          user: blog.user.id,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return blog ? (
    <div>
      <h2>{blog.title}</h2>
      <h3>by {blog.author}</h3>
      <p>
        <a href={blog.url} target="_blank" rel="noreferrer">
          {blog.url}
        </a>
        <br />
        {blog.likes} likes{' '}
        <button type="button" onClick={handleLikeButton}>
          Like
        </button>
        <br />
        Added by {blog.user.name}
      </p>
      {deleteButton()}
    </div>
  ) : null;
};

export default BlogPage;
