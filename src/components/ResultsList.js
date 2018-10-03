import React, { Component } from 'react'

export default class ResultsList extends Component {
  getTotal() {
    var total = 0;
    this.props.resultsList.forEach(element => {
      total += (element.calories * element.quantity);
    });
    return total;
  }
  deleteFromList = (key) => {
    console.log('key ', key);
    this.props.delete(key);
  }
  render() {
    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          {
            this.props.resultsList.map((element, key) => {
              return(
                <li key={key}>{element.quantity} {element.name} = {element.calories * element.quantity} cal <button type="button" onClick={() => {this.deleteFromList({key})}}><i className="fas fa-trash-alt"></i></button></li>
              );
            })
          }
        </ul>
        <strong>Total: {this.getTotal()} cal</strong>
      </div>
    )
  }
}
