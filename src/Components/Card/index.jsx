import React, { Component } from "react";
import "./style.css";

export default class Card extends Component {
  render({ title, src, body, action } = this.props) {
    return (
      <div className="card">
        <h2>{title}</h2>
        <img src={src} alt="card" />
        <p>{body}</p>
        {action?action:''}
      </div>
    );
  }
}
