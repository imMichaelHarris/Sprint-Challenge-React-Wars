import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: null,
      previousPage: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results,
          nextPage: data.next,
          previousPage: data.previous
         });
      })
      .then(data => {
        console.log(data);
        console.log(this.state);
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.starwarsChars} />
        <button onClick={() => this.getCharacters(this.state.previousPage)}>Previous Page</button>
        <button onClick={() => this.getCharacters(this.state.nextPage)}>Next Page</button>
      </div>
    );
  }
}

export default App;
