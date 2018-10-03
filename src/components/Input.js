import React, { Component } from 'react';

export default class Input extends Component{
  render() {
    return(
      <input type="text" className="input search-bar" name="search" placeholder="Search" onChange={this.props.onChange} defaultValue={this.props.value}/>
    );
  }
}