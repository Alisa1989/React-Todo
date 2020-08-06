// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(item => (
                <p>{item.task}</p>
            ))}
        </div>
    );
};

export default TodoList;

   

//{console.log(props.todos[1])}  