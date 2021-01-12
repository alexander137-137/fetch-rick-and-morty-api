import React from 'react';
import { Spinner } from 'react-bootstrap';

export const LoadingIndicator = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Spinner animation='border' />
    </div>
  );
};
