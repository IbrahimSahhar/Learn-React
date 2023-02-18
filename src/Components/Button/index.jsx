import React, { Component } from "react";
import "./style.css";

export default class Button extends Component {
  render({ title = "no title", isActive = false, Method } = this.props) {
    return (
      <button
        className={`${isActive ? "isActive" : ""} button`}
        onClick={Method}
      >
        {title}
      </button>
    );
  }
}
