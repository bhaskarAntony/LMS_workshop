import React from 'react';
import { Spinner } from 'react-bootstrap';
import './style.css'

function Loading() {
  return (
    <div className="loading-spinner-overlay">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
