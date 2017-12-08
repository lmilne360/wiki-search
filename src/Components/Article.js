import React, { Component } from 'react';

export default class Article extends Component {
  state = {};
  render() {
    //  onClick={() => window.open(`https://en.wikipedia.org/wiki/${wikiName}`)}
    const { pageid, title } = this.props.item;
    const wikiName = encodeURIComponent(title);

    return (
      <li key={pageid}>
        <a href={`https://en.wikipedia.org/wiki/${wikiName}`} target="_blank">
          {title}
        </a>
      </li>
    );
  }
}
