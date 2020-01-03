import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addTodo } from "./actions/todosActions";
import { deleteTodo } from "./actions/todosActions";
import { changeTodo } from "./actions/todosActions";

class Todo extends Component {
  state = {
    text: "",
    todos: []
  };
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  add = () => {
    let newTodo = {
      id: uuid(),
      text: this.state.text,
      complete: false
    };
    this.setState({
      text: ""
    });
    this.props.addNewTodo(newTodo);
  };
  delete = id => {
    this.props.deleteTodo(id);
  };
  complete = id => {
    this.props.changeTodo(id);
  };
  render() {
    return (
      <div className="app"> <div className="jumbotron">
        <div>
        
        <input
          type="text"
          className="inputtodo"
          className="inputtodo" placeholder="Add new To-do"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button className="btn btn-outline-secondary"  type="button" onClick={this.add}>Add</button>

        <h2>Let's get some work Done !</h2>

        </div>

      
        {this.props.todos.map(el => (
          <div className="scnd">
            <h1 className={el.complete ? "Complete" : "Undo"}>{el.text}</h1>
            <button  className="delete-btn" onClick={() => this.complete(el.id)}>
              {el.complete ? "undo" : "complete"}
            </button>
            <button className="delete-btn2" onClick={() => this.delete(el.id)}>delete</button>

            </div>
       
         
        ))}
      </div>
      </div>




    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: newTodo => dispatch(addTodo(newTodo)),
    deleteTodo: id=> dispatch(deleteTodo(id)),
    changeTodo: id=> dispatch(changeTodo(id)),

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
