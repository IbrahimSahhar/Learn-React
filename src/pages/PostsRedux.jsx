import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../Components/Container/index.jsx";

import {
  getAllPosts,
  createSinglePost,
  deltePost,
  updatePost,
} from "../redux/Posts.js";

const PostsRedux = () => {
  const { posts, isLoading, errors } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [postInput, setPostInput] = useState("");

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handelCreatePost = () => {
    dispatch(
      createSinglePost({
        title: postInput,
        body: postInput,
      })
    );
  };
  const handelDeletePost = (id) => {
    dispatch(deltePost(id));
  };
  const handelUpdatePost = (id) => {
    dispatch(updatePost(id));
  };
  return (
    <Container>
      <div>
        {isLoading ? "loading..." : "    "}
        {errors && errors}
        <input
          value={postInput}
          onChange={(e) => setPostInput(e.target.value)}
        />
        <button onClick={handelCreatePost}>create post</button>
        {posts?.map((post, index) => {
          return (
            <div key={index}>
              <h4 key={post.id}>{post.title}</h4>{" "}
              <button
                onClick={() => {
                  handelDeletePost(post.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handelUpdatePost(post.id);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PostsRedux;
