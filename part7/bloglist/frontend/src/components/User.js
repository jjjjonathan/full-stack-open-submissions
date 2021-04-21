import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import userService from '../services/users';
import { ListGroup, Alert } from 'react-bootstrap';

const User = () => {
  const id = useParams().id;
  const [user, setUser] = useState(null);

  useEffect(() => {
    userService.getById(id).then((response) => setUser(response));
  }, []);

  return user ? (
    <div className="mt-4 mb-3 ml-2">
      <h2>{user.name}</h2>
      {user.blogs.length > 0 ? (
        <div>
          <h5>Added blogs</h5>
          <ListGroup>
            {user.blogs.map((blog) => (
              <ListGroup.Item key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ) : (
        <Alert variant="warning">{user.name} has not added any blogs!</Alert>
      )}
    </div>
  ) : null;
};

export default User;
