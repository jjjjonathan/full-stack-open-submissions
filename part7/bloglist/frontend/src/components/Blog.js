import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  return (
    <div
      className="blog"
      style={{ border: '1px solid black', margin: 10, padding: 10 }}
    >
      <Link to={`/blogs/${blog.id}`}>
        <strong>{blog.title}</strong> by {blog.author}
      </Link>
    </div>
  );
};

export default Blog;
