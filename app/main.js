import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Articles from './components/articles';
import Article from './components/article';
import Home from './components/home';
import { ToDoList } from './components/todolist';
import { ToDo } from './components/todo';
import { PageNotFound } from './components/pageNotFound';
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
    <Route path='*' component={PageNotFound} />
  </Router>
, document.getElementById('root'));
