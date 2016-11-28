import React, { Component } from 'react';
import { Link } from 'react-router';

const todos = [
  {ref: 1, title: 'Clean', body: 'Boo'},
  {ref: 2, title: 'Redux', body: 'Yay'},
  {ref: 3, title: 'Make food', body: 'mmm'}
]

class ToDo extends Component {

  render() {
    let object = todos.filter(todos => {
      return todos.ref === parseInt(this.props.params.todoID)
    })
    let {title, body} = object[0]
    return (
      <div>
        <h2><Link to='/todolist' style={{ color: 'blue', background:'gray' }}
                      activeStyle={{ color: 'red'}} >ToDoList</Link> > {title}</h2>
        <h3>{body}</h3>
      </div>
    )
  }
}

export default ToDo;
