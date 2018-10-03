import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Food from './foods.json';
import Input from './components/Input';
import FilteredList from './components/FilteredList';
import ResultsList from './components/ResultsList';
import ButtonAdd from './components/ButtonAdd';

class App extends Component {
  state = {
    listComplete: Food,
    listFiltered: [],
    listSelected: [],
    status: 'loaded', //loading, loaded, error
  };

  addSelectedFood = (foodElem) => {
    if(foodElem.quantity > 0) 
    {
      let listComplete = this.state.listComplete;
      listComplete.forEach((element)=>{
        if(element.name === foodElem.name)
        {
          element.quantity = Number.parseInt(foodElem.quantity);
        }
      });
      let listFiltered = this.state.listFiltered;
      listFiltered.forEach((element)=>{
        if(element.name === foodElem.name)
        {
          element.quantity = Number.parseInt(foodElem.quantity);
        }
      });
      let listSelected = this.state.listSelected;
      let found = false;
      listSelected.forEach((element)=>{
        if(element.name === foodElem.name)
        {
          element.quantity = Number.parseInt(foodElem.quantity);
          found = true;
        }
      });
      if(found===false)
      {
        listSelected.push(foodElem);
      }
      this.setState({listComplete, listFiltered, listSelected});
    }
  }
  getFilteredList = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let listFiltered = this.state.listComplete.filter((foodElement) => foodElement.name.includes(value));
    this.setState({ listFiltered });
  };
  addNewFood = (newFood) => {
    newFood.quantity = 0;
    let listComplete = this.state.listComplete;
    listComplete.push(newFood);
    this.setState({ listComplete });
  }
  deleteFromList = (key) => {
    console.log('deleteFromList ', key);
    let listSelected = this.state.listSelected;
    console.log('selected ', listSelected[key]);
    listSelected.splice(key, 1);
    this.setState({ listSelected });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            <Input type="text" className="input search-bar" name="search" placeholder="Search" value={this.state.value} onChange={this.getFilteredList}/>
          </div>
          <ButtonAdd onSubmit = {this.addNewFood}/>
          <div className="columns">
          <div className="column">
            <FilteredList filteredList={this.state.listFiltered} selectFood={this.addSelectedFood}/>
          </div>
          <div className="column">
            <ResultsList resultsList={this.state.listSelected} delete={this.deleteFromList}/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
