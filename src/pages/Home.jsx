import axios from "axios";
import { Component } from "react";
import Container from "../Components/Container";
import ToggleButton from "../Components/ToggleButton";
// import API_URL from "../config/api.js";

export default class Home extends Component {
  state = {
    count: 0,
  };
  async componentDidMount() {
    const res = await axios.get(
      `https://react-tt-api.onrender.com/api/users/profile`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmMzYTlkMWQ1MjI3MDgxNzBlZjY4YiIsImlhdCI6MTY3NjYzMzMyNiwiZXhwIjoxNjc5MjI1MzI2fQ.vnVvSDXma7teCx40dCZHg405oPcKHjZ0yfKkMuTQhWg`,
        },
      }
    );
    console.log(res);
  }
  // async componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   const res = await axios.get(`${API_URL}users/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   console.log(res);
  // }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidCatch;
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState.count);
    console.log("getSnapshotBeforeUpdate");

    // console.log(prevProps.totalCount);

    return null;
  }

  increment = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  decrement = () => {
    this.setState((prev) => {
      if (this.state.count > 0) return { count: prev.count - 1 };
    });
  };
  render() {
    console.log("render");
    return (
      <div className="home">
        <Container>
          <h2>Home page</h2>
        </Container>
        <Container>
          <div>
            <button onClick={this.increment}>increment</button>
            <br />
            <span>counter : {this.state.count}</span>
            <br />
            <button onClick={this.decrement}>decrement</button>
            <br />
            <br />
          </div>
          <section>
            <h3>section 1</h3>
            <ToggleButton />
          </section>
        </Container>
      </div>
    );
  }
}
