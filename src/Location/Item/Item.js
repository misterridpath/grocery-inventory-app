import React from 'react';

const item = (props) => {
    return    <tr>
                <td>{props.itemName}</td>
                <td>{props.itemAmount}</td>
                <td>{props.itemUnits}</td>
                <td>{props.purchaseMonth}/{props.purchaseDay}/{props.purchaseYear}</td>
                <td>{props.expiryMonth}/{props.expiryDay}/{props.expiryYear}</td>
                <td>{props.runningLow}</td>
                <td><button class="uk-button uk-button-small uk-button-primary uk-margin-right">Edit</button>
                <button class="uk-button uk-button-small uk-button-danger">Remove</button></td>
              </tr>

}

export default item;