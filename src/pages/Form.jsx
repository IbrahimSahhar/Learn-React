import React, { Component } from "react";
import Container from "../Components/Container";
import { object, string } from "yup";
import axios from "axios";

const validEmail = new RegExp(
  "^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$"
);

export default class Form extends Component {
  state = {
    username: "",
    password: "",
    myData: {
      username: "",
      password: "",
    },
    isLoading: false,
    errors: [],
  };
  static getDerivedStateFromProps(props, state) {
    return { Method: props.Method };
  }

  schema = object().shape({
    username: string("the name must be string").required(
      "the username is required"
    ),
    password: string("the password must be string")
      .required("the password is required")
      .min(6, "the password must be at least 6 characters ")
      .max(22, "the password must be at most 22 characters ")
      .matches(validEmail, "the password has not valid characters"),
  });

  handelInput = (e) => {
    const { id, value } = e.target;
    this.setState((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };
  handelSubmit = async (e) => {
    this.setState({ isLoading: true });
    e.preventDefault();
    this.schema
      .validate(
        {
          username: this.state.username,
          password: this.state.password,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          username: this.state.username,
          password: this.state.password,
        });
        console.log(response.data.token);
        this.setState({
          username: "",
          password: "",
          myData: {
            username: this.state.username,
            password: this.state.password,
          },
        });
        const items = {
          firstName: response.data.firstName,
          lastName: response.data.lastName,
        };
        localStorage.setItem("items", JSON.stringify(items));
        localStorage.setItem("token", response.data.token);

        this.state.Method();
      })
      .catch((e) => {
        e.errors
          ? this.setState({ errors: e.errors })
          : this.setState({ errors: [e.message] });
      })
      .finally(this.setState({ isLoading: false }));
  };

  prevData = (e) => {
    e.preventDefault();
    this.setState((prev) => {
      return {
        username: prev.myData.username,
        password: prev.myData.password,
      };
    });
  };
  render() {
    return (
      <div style={{ padding: "20px 0" }}>
        <Container>
          <form onSubmit={this.handelSubmit}>
            <ul style={{ listStyle: "none", marginBottom: "10px" }}>
              {this.state.errors?.map((error, index) => {
                return (
                  <li style={{ color: "red" }} key={index}>
                    {error}
                  </li>
                );
              })}
            </ul>

            <label htmlFor="email">User Name</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              style={{ padding: "5px" }}
              onChange={this.handelInput}
              value={this.state.username}
              autoComplete="on"
            />
            <br />
            <br />

            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              style={{ padding: "5px" }}
              onChange={this.handelInput}
              value={this.state.password}
              autoComplete="on"
            />
            <br />

            <button type="submit">
              {this.state.isLoading ? "Loading..." : "Submit"}
            </button>
            <button onClick={this.prevData}>prevData</button>
          </form>
        </Container>
      </div>
    );
  }
}
