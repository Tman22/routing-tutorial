import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = { articles: []}
  }

  componentDidMount() {
    this.setState({articles: articles})
  }

  handleClick() {
    console.log('whoa')
  }

  render() {
    let title = this.props.location.pathname ? this.props.location.pathname.split('/')[1].toUpperCase() : 'List on Lists';
    return (
      <div>
        <div className='title'>
          <h1>{title}</h1>
        </div>
        <div className='textBox'>{React.cloneElement(this.props.children, {articles: this.state.articles })}</div>
      </div>
    )
  }
}


export default App;
