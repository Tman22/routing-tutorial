import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {

  render() {
    let title = 'List on Lists';
    return (
      <div>
        <div className='title'>
          <h1>{title}</h1>
        </div>
        <div className='textBox'>{this.props.children}</div>
      </div>
    )
  }
}


export default App;
