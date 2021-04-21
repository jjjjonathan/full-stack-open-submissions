import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updateBlog, deleteBlog, addComment } from '../reducers/blogReducer';
import {
  timedMessage,
  timedErrorMessage,
} from '../reducers/notificationReducer';
import uniqid from 'uniqid';

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

  const handleAddComment = (event) => {
    event.preventDefault();
    const comment = event.target.newcomment.value;
    event.target.newcomment.value = '';
    console.log('adding', comment);
    dispatch(addComment(blog.id, comment));
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
      <h3>Comments</h3>
      <form onSubmit={handleAddComment}>
        <input name="newcomment" />
        <button type="submit">add comment</button>
      </form>
      <ul>
        {blog.comments.map((comment) => (
          <li key={uniqid()}>{comment}</li>
        ))}
      </ul>
      {deleteButton()}
    </div>
  ) : null;
};

export default BlogPage;
