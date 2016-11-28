import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    console.log(this.props.params)
    return (
      <div>
        <header>Home</header>
        Lots of fun stuff about me.
        <ul>
          <li>Like Selfies</li>
          <li>Or shredding the gnar</li>
        </ul>
      </div>
    )
  }
}

export default Home;
