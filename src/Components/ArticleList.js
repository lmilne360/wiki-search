import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
  state = {};

  render() {
    return (
      <ul className="article-list">
        {this.props.items.map(article => <Article item={article} />)}
      </ul>
    );
  }
}

export default ArticleList;
