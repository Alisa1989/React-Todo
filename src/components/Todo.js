import React from 'react';

import "./Todo.css";

const Todo = props => {
    return(
        <div className="taskContainer" 
            className={`item${props.item.completed ? " completed" :""}`}
            onClick={() => props.toggleItem(props.item.id, props.item.completed)}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;