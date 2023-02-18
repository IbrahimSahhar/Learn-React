import React, { Component } from "react";
import "./style.css";

export default class ToggleButton extends Component {
  state = {
    theme: "dark",
  };
  changeTheme = () => {
    this.setState((prev) =>
      prev.theme === "dark" ? { theme: "light" } : { theme: "dark" }
    );
  };
  render() {
    return (
      <button
        className={`toggle ${this.state.theme}`}
        onClick={this.changeTheme}
      >
        {this.state.theme === "dark" ? "light" : "dark"}
      </button>
    );
  }
}
