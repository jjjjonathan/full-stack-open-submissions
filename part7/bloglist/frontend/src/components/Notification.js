import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const { message, isError } = useSelector((state) => state.notification);

  const normalStyle = () => ({ fontSize: 20, color: 'green' });
  const errorStyle = () => ({ fontSize: 20, color: 'red' });

  return (
    <div className="message" style={isError ? errorStyle() : normalStyle()}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
