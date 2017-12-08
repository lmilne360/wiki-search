import React, { Component } from 'react';
import GlobeIcon from './Components/GlobeIcon';

// import fetch from 'isomorphic-fetch';
// import logo from './logo.svg';
import './App.css';
// import Article from './Components/Article';
import Searchbar from './Components/Searchbar';

class App extends Component {
  render() {
    // if (!this.state.items) return <p> Loading.. </p>;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Wiki Search</h1>
          <GlobeIcon />
        </header>
        <p className="App-intro">Search for wikipedia articles</p>
        <Searchbar />
      </div>
    );
  }
}

export default App;
