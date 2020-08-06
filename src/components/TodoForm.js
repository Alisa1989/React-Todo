// will contain: add to do
// will contain: clear completed
import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    //handles user imput
    handleChanges = e => {
        this.setState({ item: e.target.value })
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({ item: "" });
        console.log("submitted");
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    name="addItem"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    };
}

export default TodoForm