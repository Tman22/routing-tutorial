import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Articles from './Articles';
import Article from './article';
import Users from './users';
import Home from './Home';
import ToDoList from './todolist';
import ToDo from './todo';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRedirect to='/home' component={Home} />
      <Route path="/home" component={Home} />
      <Route path='articles'>
        <IndexRoute component={Articles} />
        <Route path=':name' component={Article} />
      </Route>
      <Route path='todolist'>
        <IndexRoute component={ToDoList} />
        <Route path=':todoID' component={ToDo} />
      </Route>
    </Route>
  </Router>

, document.getElementById('root'));
