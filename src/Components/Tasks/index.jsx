import React, { Component } from "react";
import Container from "../Container";

const names = ["ibrahim", "shady", "mohammed", "ahmad", "ali"];

export default class Tasks extends Component {
  render() {
    return (
      <Container>
        <div>
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </Container>
    );
  }
}
