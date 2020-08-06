import React from 'react';
import ReactDOM from "react-dom";

import TodoList from './components/TodoList';

const todos = [
  {
    task: "Clean Garage",
    id: 1,
    completed: false
  },
  {
    task: "Wash Cats",
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: todos
    };
  }

  toggleItem= itemId => {
    console.log(itemId);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.todos}
        />
        {/* {todos.map(item => (
     <p>{item.task}</p>
     ))}  */}
      </div>
    );
  }
}

export default App;
