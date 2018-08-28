import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      amount: '',
      units: '',
      purchaseMonth: '',
      purchaseDay: '',
      purchaseYear: '',
      expiryMonth: '',
      expiryDay: '',
      expiryYear: '',
      runningLow: 'Yes',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    localStorage.setItem(name, value);
  }


  handleSubmit(event) {
    //alert('Your new item was added: ' + this.state.itemName + ', ' + this.state.amount + ', ' + this.state.units);
    var itemName = localStorage.getItem('itemName');
    var amount = localStorage.getItem('amount');
    var units = localStorage.getItem('units');
    var purchaseMonth = localStorage.getItem('purchaseMonth');
    var purchaseDay = localStorage.getItem('purchaseDay');
    var purchaseYear = localStorage.getItem('purchaseYear');
    var expiryMonth = localStorage.getItem('expiryMonth');
    var expiryDay = localStorage.getItem('expiryDay');
    var expiryYear = localStorage.getItem('expiryYear');
    var runningLow = localStorage.getItem('runningLow');
    alert(itemName + ' ' + amount + ' ' + units + ' ' + purchaseMonth + '/' + purchaseDay + '/' + purchaseYear + ' ' + expiryMonth + '/' + expiryDay + '/' + expiryYear + ' ' + runningLow);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="uk-card uk-card-default uk-card-body">
        <table id="newItem" className="uk-table uk-table-divider">
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
          <td><input type="text" className="uk-input " value={this.state.itemName} onChange={this.handleInputChange} name="itemName" /></td>
          <td><input type="text" class="uk-input uk-form-width-xsmall" value={this.state.amount} onChange={this.handleInputChange} name="amount" /></td>
          <td><input type="text" class="uk-input uk-form-width-medium" value={this.state.units} onChange={this.handleInputChange} name="units" /></td>
          <td><input type="text" class="uk-input uk-form-width-xsmall" value={this.state.purchaseMonth} onChange={this.handleInputChange} name="purchaseMonth" /> / <input type="text" class="uk-input uk-form-width-xsmall" value={this.state.purchaseDay} onChange={this.handleInputChange} name="purchaseDay" /> / <input type="text" class="uk-input uk-form-width-xsmall" value={this.state.purchaseYear} onChange={this.handleInputChange} name="purchaseYear" /></td>
          <td><input type="text" class="uk-input uk-form-width-xsmall" value={this.state.expiryMonth} onChange={this.handleInputChange} name="expiryMonth" /> / <input type="text" class="uk-input uk-form-width-xsmall" value={this.state.expiryDay} onChange={this.handleInputChange} name="expiryDay" /> / <input type="text" class="uk-input uk-form-width-xsmall" value={this.state.expiryYear} onChange={this.handleInputChange} name="expiryYear" /></td>
          <td>
            <select class="uk-select" name="runningLow" value={this.state.runningLow} onChange={this.handleInputChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </td>
          <td><input type="submit" value="Submit" class="uk-button uk-button-primary" /></td>
        </tr>
        </tbody>
        </table>
        </div>
      </form>
    );
  }
}

export default NameForm;