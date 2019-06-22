import React, { Component } from "react";
import Item from "./item";

class App extends Component {
    state = {
        list: [],
        currentValue: ""
    };

    handleChange = evt => {
        this.setState({
            currentValue: evt.target.value
        });
    };

    handleClick = () => {
        const { list, currentValue } = this.state;
        this.setState({
            list: [...list, currentValue]
        });
    };

    deleteItem = index => () => {
        const newList = this.state.list.filter(
            item => this.state.list[index] !== item
        );
        this.setState({
            list: newList
        });
    };

    render() {
        return (
            <div>
                <input
                    value={this.state.currentValue}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Add task"
                />
                <button onClick={this.handleClick}>Add task</button>
                {this.state.list.map((item, index) => (
                    <Item
                        key={item}
                        text={item}
                        deleteItem={this.deleteItem}
                        index={index}
                    />
                ))}
            </div>
        );
    }
}

export default App;
