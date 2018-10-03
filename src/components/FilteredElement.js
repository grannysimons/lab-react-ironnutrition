import React, { Component } from "react";

export default class FilteredElement extends Component {
  state = {
    value: 0,
  }
  handleSubmit = () => {
    // let element = this.props.food;
    let element = Object.assign({}, this.props.food);
    element.quantity = this.state.value;
    this.props.select(element);
  }
  updateValue = (e) => {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <li className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt={this.props.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input type="number" className="input" defaultValue={this.props.food.quantity} onChange={this.updateValue}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleSubmit}>+</button>
              </div>
            </div>
          </div>
        </article>
      </li>
    );
  }
}
