import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Location from './Location/Location';

class App extends Component {
  state = {
    locations: [
      { name: 'Fridge'},
      { name: 'Freezer'},
      { name: 'Shelf'},
      { name: 'Spice Cabinet'},
      { name: 'Kitchen'}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grocery Inventory</h1>
        </header>
        <p className="App-intro">
          Easily manager your grocery inventory.
        </p>
        <button class="uk-button uk-button-primary uk-margin-left">Add New Item</button>
        <div id="new"></div>
        <Location name={this.state.locations[0].name} />
        <Location name={this.state.locations[1].name} />
        <Location name={this.state.locations[2].name} />
        <Location name={this.state.locations[3].name} />
        <Location name={this.state.locations[4].name} />
      </div>
    );
  }
}

export default App;
