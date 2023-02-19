import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Posts from "../mock/Posts.js";
const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const myData = Posts.find((post) => String(post.id) === id);
  return (
    <div>
      <div key={myData.id}>
        <h1>id : {myData?.id}</h1>
        <h1>name : {myData?.name}</h1>
        <h1>category : {myData?.category}</h1>
        <h1>price : {myData?.price}</h1>
        <h1>stocked : {myData?.stocked ? "stocked" : "not stocked"}</h1>
      </div>
      <button onClick={() => navigate("/Posts")}>Back</button>
    </div>
  );
};

export default Post;
