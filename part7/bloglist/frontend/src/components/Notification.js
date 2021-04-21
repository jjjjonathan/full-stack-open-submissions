import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const Notification = () => {
  const { message, isError } = useSelector((state) => state.notification);

  return message ? (
    <Alert className="message m-3" variant={isError ? 'danger' : 'success'}>
      {message}
    </Alert>
  ) : null;
};

export default Notification;
