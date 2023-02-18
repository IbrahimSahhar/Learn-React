import React, { Component } from "react";
import Container from "../Components/Container";

export default class About extends Component {
  input1 = React.createRef();
  input2 = React.createRef();
  input3 = React.createRef();
  handelInput = (id) => {
    this["input" + id].current.focus();
  };

  render() {
    return (
      <Container>
        <h1>About</h1>
        <input
          type="number"
          ref={this.input1}
          onChange={() => this.handelInput(2)}
        ></input>
        <input
          type="number"
          ref={this.input2}
          onChange={() => this.handelInput(3)}
        ></input>
        <input
          type="number"
          ref={this.input3}
          onChange={() => this.handelInput(1)}
        ></input>
      </Container>
    );
  }
}
