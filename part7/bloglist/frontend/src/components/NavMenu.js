import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../reducers/userReducer';
import { timedMessage } from '../reducers/notificationReducer';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(timedMessage(`Successfully logged out ${user.username}`, 3));
    window.localStorage.removeItem('loggedInBlogListUser');
    dispatch(setUser(null));
  };

  const style = {
    background: 'lightgray',
    padding: 15,
  };

  return (
    <div style={style}>
      <Link to="/">Blogs</Link> <Link to="/users">Users</Link> Logged in as{' '}
      {user.name} <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default NavMenu;
