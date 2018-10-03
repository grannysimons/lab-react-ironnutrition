import React, { Component } from 'react'
import FilteredElement from './FilteredElement';

export default class FilteredList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.filteredList.map((element, index) => {
            return (<FilteredElement food={element} key={index} select={this.props.selectFood}/>);
          })
        }
      </ul>
    )
  }
}
