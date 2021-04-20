import React, { useState, useEffect } from 'react';
import userService from '../services/users';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then((response) => setUsers(response));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Blogs Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <th>{user.name}</th>
                <th>{user.blogs.length}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
