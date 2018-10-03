import React, { Component } from "react";

export default class ButtonAdd extends Component {
  state = {
    name:'',
    calories:0,
    image:'',
  }
  updateInput = (e) => {
    e.preventDefault();
    switch(e.target.name)
    {
      case "name":
        this.setState({name: e.target.value});
      break;
      case "calories":
        this.setState({calories: e.target.value});
      break;
      case "image":
        this.setState({image: e.target.value});
      break;
      default:
      break;
    }
  }
  addNewFood = () => {
    let newFood = this.state;
    this.props.onSubmit(newFood);
  }
  render() {
    return (
      <div>
        <form className="row">
          <div className="form-group col">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" onChange={this.updateInput} name="name" value={this.state.name}/>
          </div>
          <div className="form-group col">
            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Number of calories" onChange={this.updateInput} name="calories" value={this.state.calories}/>
          </div>
          <div className="form-group col">
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="image URL" onChange={this.updateInput} name="image" value={this.state.image}/>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.addNewFood}>Enviar</button>
        </form>
      </div>
    );
  }
}
