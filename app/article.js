import React, { Component } from 'react';
import { Link } from 'react-router';

const articles = [
  {ref: 1, title: 'Alex does the stuff', body: 'whoa.'},
  {ref: 2, title: 'Lacey kills it', body: 'whats new?'},
  {ref: 3, title: 'Ryan creates Skynet', body: 'why though?'}
]

class Article extends Component {
  render() {
    console.log(this.props)
    let object = articles.filter(article => {
      return article.ref === parseInt(this.props.params.name)
    })
    let {title, body} = object[0]
    return (
      <div>
        <h2><Link to='/articles' style={{ color: 'blue', background:'gray' }}
                      activeStyle={{ color: 'red'}} >Articles</Link> > {title}</h2>
        <h3>{body}</h3>
      </div>
    )
  }
}

export default Article;
