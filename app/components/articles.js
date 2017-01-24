import React, { Component } from 'react';
import { Link } from 'react-router';

class Articles extends Component {

  render() {
    let links = this.props.articles.map(article => <Link key={article.ref} to={'/articles/'+ article.ref}>{article.title}<br/></Link>)
    return (
      <div>
        Articles:<br/>
        {links}
      </div>
    )
  }
}
// {/* <button onClick={() => {this.props.handleClick() }}>Woot</button> */}


export default Articles;
