import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBlog } from '../reducers/blogReducer';

const Blog = ({ blog, onDelete, user }) => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
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

  const deleteButton = () => {
    if (user.username === blog.user.username) {
      return <button onClick={onDelete}>Delete</button>;
    } else {
      return null;
    }
  };

  return (
    <div
      className="blog"
      style={{ border: '1px solid black', margin: 10, padding: 10 }}
    >
      <strong>{blog.title}</strong> by {blog.author}
      <button style={hideWhenVisible} onClick={toggleVisibility}>
        Show details
      </button>
      <div style={showWhenVisible}>
        <ul>
          <li>{blog.url}</li>
          <li>
            Likes: {blog.likes}
            <button
              onClick={handleLikeButton}
              key={blog.id}
              className="like-button"
            >
              Like
            </button>
          </li>
          <li>User: {blog.user.name}</li>
        </ul>
        {deleteButton()}
        <button onClick={toggleVisibility}>Hide details</button>
      </div>
    </div>
  );
};

export default Blog;
