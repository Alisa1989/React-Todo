import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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
      todos: todos
    };
  }

  //change state of item from purchased to !purchased
  toggleItem = (itemId, isCompleted) => {
    console.log(itemId, isCompleted);
    this.setState({
      todos: this.state.todos.map(item => {
        //going through array and looking for the toggled item
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item; //if not found you stick the other items back in the array
      })
    });
  };

  //add new item
  addItem = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
    console.log("list updated")
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
