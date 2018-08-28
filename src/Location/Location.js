import React from 'react';
import Item from './Item/Item';

const location = (props) => {
    return (
        <div class="uk-card uk-card-default uk-card-body">
          <h1 className="uk-heading-bullet uk-card-title">{props.name}</h1>
          <table id="fridge" className="uk-table uk-table-divider">
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
                <Item itemName="Shredded Cheese" itemAmount="8" itemUnits="ounces" purchaseMonth="08" purchaseDay="10" purchaseYear="18" expiryMonth="11" expiryDay="17" expiryYear="18" runningLow="No" />
                <Item itemName="Apple" itemAmount="2" itemUnits="whole" purchaseMonth="08" purchaseDay="10" purchaseYear="18" expiryMonth="10" expiryDay="10" expiryYear="18" runningLow="Yes" />
            </tbody>
          </table>
        </div>
    );
}

export default location;