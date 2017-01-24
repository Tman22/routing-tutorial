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


ReactDOM.render(<App />
, document.getElementById('root'));
