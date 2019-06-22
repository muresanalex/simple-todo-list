import React, { Component } from "react";
import "./item.css";

class Item extends Component {
    state = {
        checked: false
    };

    handleChange = () => {
        this.setState({ checked: !this.state.checked });
    };

    render() {
        const className = this.state.checked ? "crossed" : "";

        return (
            <div>
                <input
                    type="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                />
                <span className={className}>{this.props.text}</span>
                <button onClick={this.props.deleteItem(this.props.index)}>
                    x
                </button>
            </div>
        );
    }
}

export default Item;
