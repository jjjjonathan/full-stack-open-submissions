import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = ({
  onLogin,
  username,
  onUsernameChange,
  password,
  onPasswordChange,
}) => {
  return (
    <Form onSubmit={onLogin}>
      <Form.Group>
        <Form.Label htmlFor="username">Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          name="username"
          id="username"
          onChange={onUsernameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={onPasswordChange}
        />
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login;
