import React from "react";
//import ReactDOM from 'react-dom';
import "./App.css";
import Header from "./components/Header/Header";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todoData
    };
    this.changehandler = this.changehandler.bind(this);
  }

  changehandler(id) {
    this.setState(prevState => {
      const updateTodo = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updateTodo
      };
    });
  }

  render() {
    const header = this.state.todos.map(item => {
      return (
        <Header key={item.id} task={item} handleChange={this.changehandler} />
      );
    });

    return (
      <div className="style">
        <h1>Todo List App...</h1>
        {header}
      </div>
    );
  }
}

export default App;


