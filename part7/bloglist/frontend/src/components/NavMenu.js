import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../reducers/userReducer';
import { timedMessage } from '../reducers/notificationReducer';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, Form } from 'react-bootstrap';

const NavMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(timedMessage(`Successfully logged out ${user.username}`, 3));
    window.localStorage.removeItem('loggedInBlogListUser');
    dispatch(setUser(null));
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Bloglist</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text className="mr-3">
            <Link to="/">Blogs</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/users">Users</Link>
          </Navbar.Text>
        </Nav>
        <Navbar.Text className="mr-3">Logged in as {user.name}</Navbar.Text>
        <Form>
          <Button onClick={handleLogout} variant="outline-light">
            Logout
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
