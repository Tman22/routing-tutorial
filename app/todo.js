import React, { Component } from 'react';
import { Link } from 'react-router';

const todos = [
  {ref: 1, title: 'Clean', body: 'Boo'},
  {ref: 2, title: 'Redux', body: 'Yay'},
  {ref: 3, title: 'Make food', body: 'mmm'}
]

class ToDo extends Component {

  render() {
    // console.log(this.props)
    // console.log(this.props.params)
    // does this.props.params have anything you could reference to get the todo?
    return (
      <div>
        well now.
      </div>
    )
  }
}

export default ToDo;
