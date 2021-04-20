import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Notification from './components/Notification';
import Blog from './components/Blog';
import Login from './components/Login';
import Create from './components/Create';
import Togglable from './components/Togglable';
import Users from './components/Users';
import User from './components/User';
import BlogPage from './components/BlogPage';
import NavMenu from './components/NavMenu';

import blogService from './services/blogs';
import loginService from './services/login';

import {
  timedMessage,
  timedErrorMessage,
} from './reducers/notificationReducer';
import { initializeBlogs, createBlog } from './reducers/blogReducer';
import { setUser } from './reducers/userReducer';

const App = () => {
  const blogs = useSelector((state) => state.blogs);
  const user = useSelector((state) => state.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const newBlogRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeBlogs());
  }, []);

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem(
      'loggedInBlogListUser'
    );
    if (loggedInUserJSON) {
      const newUser = JSON.parse(loggedInUserJSON);
      dispatch(setUser(newUser));
      blogService.setToken(newUser.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const newUser = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem(
        'loggedInBlogListUser',
        JSON.stringify(newUser)
      );

      blogService.setToken(newUser.token);

      dispatch(setUser(newUser));
      setUsername('');
      setPassword('');

      dispatch(
        timedMessage(`Successfully logged in as ${newUser.username}`, 3)
      );
    } catch (error) {
      console.log({ error });
      if (error.response.status === 401) {
        dispatch(timedErrorMessage('Invalid username or password'), 3);
      } else {
        dispatch(timedErrorMessage('Connection error', 3));
      }
    }
  };

  const handleCreateSubmit = async (event) => {
    event.preventDefault();

    try {
      newBlogRef.current.toggleVisibility();

      dispatch(
        createBlog({
          title,
          author,
          url,
        })
      );

      dispatch(timedMessage(`Successfully added ${title} to list!`, 3));

      setTitle('');
      setAuthor('');
      setUrl('');
    } catch (error) {
      console.log({ error });
      dispatch(timedErrorMessage('Error adding blog to list!', 3));
    }
  };

  const mainPage = () => (
    <div>
      <h2>Blogs</h2>
      <Togglable buttonLabel="Add new" ref={newBlogRef}>
        <Create
          onSubmit={handleCreateSubmit}
          title={title}
          onTitleChange={(event) => {
            setTitle(event.target.value);
          }}
          author={author}
          onAuthorChange={(event) => {
            setAuthor(event.target.value);
          }}
          url={url}
          onUrlChange={(event) => {
            setUrl(event.target.value);
          }}
        />
      </Togglable>
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
    </div>
  );

  const loginForm = () => (
    <div>
      <h2>Login</h2>
      <Login
        onLogin={handleLogin}
        username={username}
        onUsernameChange={(event) => {
          setUsername(event.target.value);
        }}
        password={password}
        onPasswordChange={(event) => {
          setPassword(event.target.value);
        }}
      />
    </div>
  );

  return (
    <div>
      <Notification />
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <NavMenu />
          <Switch>
            <Route path="/blogs/:id">
              <BlogPage />
            </Route>
            <Route path="/users/:id">
              <User />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">{mainPage()}</Route>
          </Switch>
        </div>
      )}
    </div>
  );
};

export default App;
