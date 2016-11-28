import React, { Component } from 'react';
import { Link } from 'react-router';

const articles = [
  {ref: 1, title: 'Alex does the stuff', body: 'whoa.'},
  {ref: 2, title: 'Lacey kills it', body: 'whats new?'},
  {ref: 3, title: 'Ryan creates Skynet', body: 'why though?'}
]

class Articles extends Component {

  render() {
    console.log(this.props.params)
    console.log(articles)
    return (
      <div>
        <header>Articles</header>
        <ul>
          {articles.map(article =>
            <li key={article.ref}><Link to={'/articles/'+ article.ref}>{article.title}</Link></li>)
          }
        </ul>
      </div>
    )
  }
}

export default Articles;
