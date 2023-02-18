import React, { Component } from "react";

export default class ListItem extends Component {
  render({ todo, isLoading } = this.props) {
    return (
      <div>
        <li>
          <span>user id : {todo?.userId}</span>
          <br />
          <span> id : {todo?.id}</span>
          <br />
          <span>title : {todo?.title}</span>
          <br />
          <span>
            complete :{todo?.completed ? " completed" : " not completed"}
          </span>
          <br />
          <span>-----------------------------------------------------</span>
        </li>
      </div>
    );
  }
}
