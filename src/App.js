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
        /*<div class="uk-card uk-card-default uk-card-body">
          <h1 className="uk-heading-bullet uk-card-title">Freezer</h1>
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>Purchase Date</th>
                <th>Expiration Date</th>
                <th>Running Low?</th>
                <th>&#160;</th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <td>Ground Beef</td>
                <td>2</td>
                <td>lbs</td>
                <td>08/10/18</td>
                <td>09/10/18</td>
                <td>
                  <select class="uk-select">
                    <option>Yes</option>
                    <option selected>No</option>
                  </select>
                </td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>
              <tr>
                <td>Chicken Breasts</td>
                <td>2</td>
                <td>lbs</td>
                <td>08/10/18</td>
                <td>09/10/18</td>
                <td>
                  <select class="uk-select">
                    <option>Yes</option>
                    <option selected>No</option>
                  </select>
                </td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="uk-card uk-card-default uk-card-body">
          <h1 className="uk-heading-bullet uk-card-title">Shelf</h1>
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>Purchase Date</th>
                <th>Expiration Date</th>
                <th>Running Low?</th>
                <th>&#160;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>All Purpose Flour</td>
                <td>5</td>
                <td>lbs</td>
                <td>08/10/18</td>
                <td>08/10/19</td>
                <td>
                  <select class="uk-select">
                    <option>Yes</option>
                    <option selected>No</option>
                  </select>
                </td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>
              <tr>
                <td>Can Green Beans</td>
                <td>3</td>
                <td>whole</td>
                <td>08/10/18</td>
                <td>12/17/18</td>
                <td>
                  <select class="uk-select">
                    <option>Yes</option>
                    <option selected>No</option>
                  </select>
                </td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="uk-card uk-card-default uk-card-body">
          <h1 className="uk-heading-bullet uk-card-title">Spices</h1>
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>Purchase Date</th>
                <th>Expiration Date</th>
                <th>Running Low?</th>
                <th>&#160;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Olive Oil</td>
                <td>24</td>
                <td>ounces</td>
                <td>08/10/18</td>
                <td>08/10/19</td>
                <td>
                  <select class="uk-select">
                    <option>Yes</option>
                    <option selected>No</option>
                  </select>
                </td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>
              <tr>
                <td>Paprika</td>
                <td>3.75</td>
                <td>ounces</td>
                <td>08/10/18</td>
                <td>12/17/19</td>
                <td>
                  <select class="uk-select">
                    <option>Yes</option>
                    <option selected>No</option>
                  </select>
                </td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="uk-card uk-card-default uk-card-body">
          <h1 className="uk-heading-bullet uk-card-title">Kitchen</h1>
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>Purchase Date</th>
                <th>Expiration Date</th>
                <th>Running Low?</th>
                <th>&#160;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bananas</td>
                <td>6</td>
                <td>whole</td>
                <td>08/10/18</td>
                <td>08/17/18</td>
                <td>
                  <select class="uk-select">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  </td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>
              <tr>
                <td>Dog Food</td>
                <td>30</td>
                <td>lbs</td>
                <td>08/10/18</td>
                <td>02/17/19</td>
                <td>
                  <select class="uk-select">
                    <option>Yes</option>
                    <option selected>No</option>
                  </select>
                </td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        */
      </div>
    );
  }
}

export default App;
