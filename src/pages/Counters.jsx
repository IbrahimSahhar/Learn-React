import React, { Component } from "react";
import Container from "../Components/Container";
import Counter from "../Components/Counter";

const counters = [
  { id: 1, count: 0, step: 1 },
  { id: 2, count: 0, step: 2 },
  { id: 3, count: 0, step: 3 },
];
export default class Counters extends Component {
  state = {
    counters: counters,
    total: 0,
  };

  increment = (id = 1, step = 1) => {
    this.setState((prev) => {
      return {
        counters: prev.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + step };
          } else {
            return item;
          }
        }),
      };
    });
  };

  componentDidUpdate() {
    this.setState((prev) => {
      const newTotal = prev.counters.reduce((acc, cur) => acc + cur.count, 0);
      if (prev.total !== newTotal) {
        return { total: newTotal };
      }
    });
  }
  render() {
    return (
      <Container>
        <div>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              {...counter}
              increment={() => this.increment(counter.id, counter.step)}
              newThis={this}
            />
          ))}

          <div className="total">Total : {this.state.total}</div>
        </div>
      </Container>
    );
  }
}
