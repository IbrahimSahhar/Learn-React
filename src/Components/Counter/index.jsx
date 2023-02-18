import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  decrement = () => {
    const { id, step, newThis } = this.props;
    newThis.setState((prev) => {
      return {
        counters: prev.counters.map((item) => {
          if (item.id === id && item.count >= step) {
            return { ...item, count: item.count - step };
          } else {
            return item;
          }
        }),
      };
    });
  };
  render({ increment, count = 0 } = this.props) {
    return (
      <div>
        <button onClick={increment}>increment</button>
        <br />
        <span>counter : {count}</span>
        <br />
        <button onClick={this.decrement}>decrement</button>
        <br />
        <br />
      </div>
    );
  }
}
