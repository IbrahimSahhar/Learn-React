import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Container from "../Components/Container";

export default class TodoList extends Component {
  state = {
    data: [],
    isLoading: false,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => this.setState({ data: response.data }))
    //   .catch((err) => console.log(err))
    //   .finally(() => this.setState({ isLoading: false }));
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      this.setState({ data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          "Loading..."
        ) : (
          <div>
            <ul>
              {this.state.data?.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={`${item.id}`}
                    style={{
                      cursor: "pointer",
                      display: "block",
                      fontSize: "20px",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Todo {item.id}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    );
  }
}
