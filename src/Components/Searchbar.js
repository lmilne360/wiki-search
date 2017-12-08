import React, { Component } from 'react';
import ArticleList from './ArticleList';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.updateText = this.updateText.bind(this);
    this.searchArticles = this.searchArticles.bind(this);
    // this.openRandomArticle = this.openRandomArticle.bind(this);
  }

  openRandomArticle() {
    window.open('http://en.wikipedia.org/wiki/Special:Randompage');
  }

  searchArticles(event) {
    event.preventDefault();
    fetch(proxyUrl + url + this.state.text, {
      method: 'POST',
      headers: new Headers({
        'Api-User-Agent': 'Wiki Reader Application',
      }),
      // Other init settings such as 'credentials'
    })
      .then(res => res.json())
      .then((data) => {
        // console.log(data.query.search);
        this.setState({ items: data.query.search });
        // console.log('state', this.state);
      })
      .catch((err) => {
        this.setState({ error: err });
        // alert(err);
      });
  }

  updateText(event) {
    const value = event.target.value;
    this.setState({
      text: value,
    });
    console.log(value);
  }

  render() {
    return (
      <div>
        {this.state.error && <div className="error">{this.state.error}</div>}
        <div className="searchbar">
          <form onSubmit={this.searchArticles}>
            <input
              type="text"
              // value={this.state.text}
              id="searchbar-input"
              placeholder="Search Term..."
              onChange={this.updateText}
            />
          </form>
        </div>

        <button onClick={this.searchArticles}>Search Articles </button>
        <button onClick={this.openRandomArticle}>Random Article</button>
        {this.state.items && <ArticleList items={this.state.items} />}
      </div>
    );
  }
}

export default Searchbar;
