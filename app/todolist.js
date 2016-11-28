import React, { Component } from 'react';
import { Link } from 'react-router';

const todos = [
  {ref: 1, title: 'Clean', body: 'Boo'},
  {ref: 2, title: 'Redux', body: 'Yay'},
  {ref: 3, title: 'Make food', body: 'mmm'}
]

class ToDoList extends Component {

  render() {
    return (
      <div>
        <header>ToDoList</header>
        <ul>
        {todos.map(todo =>
          <li key={todo.ref}><Link to={'/todolist/'+ todo.ref}>{todo.title}</Link></li>)
        }
        </ul>
      </div>
    )
  }
}

export default ToDoList;
