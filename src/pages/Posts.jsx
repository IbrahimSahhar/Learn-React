import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Container/index.jsx";
import PostData from "../mock/Posts.js";
export default class Posts extends Component {
  render() {
    return (
      <Container>
        <div>
          <ul>
            {PostData.map((post) => {
              return (
                <li key={post.id}>
                  <Link to={`/dashboard/Posts/${post.id}`}>Post {post.id}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    );
  }
}
