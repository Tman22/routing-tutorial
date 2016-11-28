import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Lists on Lists</h1>
        <ul>
          <li><Link to='/articles' style={{ color: 'blue', background:'gray' }}
                      activeStyle={{ color: 'red'}} >Articles</Link></li>
          <li><Link to='/todolist' style={{ color: 'blue', background:'gray' }}
                      activeStyle={{ color: 'red'}} >ToDoList</Link></li>
          <li><Link to='/home' style={{ color: 'blue', background:'gray' }}
                      activeStyle={{ color: 'red'}} >Home</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;