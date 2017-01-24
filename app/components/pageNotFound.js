import React, { Component } from 'react';
import { Link } from 'react-router';

export const PageNotFound = (props) => {
  return (
    <div>
      <h1>404 - Page: <strong>{props.params.splat}</strong> Not Found </h1>
      <h4><Link to='/'>Come back Home</Link></h4>
    </div>
  )
}
