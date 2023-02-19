import React, { useEffect, useState } from "react";
import Container from "../Components/Container/index.jsx";
const Posts = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(false);

  // useEffect(() => {
  //   console.log("Mounting and updating");
  // });
  // useEffect(() => {
  //   console.log("Mounting  ");
  // }, []);

  // useEffect(() => {
  //   console.log("updating in counter");
  // }, [counter]);

  // useEffect(() => {
  //   console.log("updating in data");
  // }, [data]);

  // useEffect(() => {
  //   return () => console.log(" UnMounting  ");
  // }, []);

  // useEffect(() => () => console.log(" UnMounting  "), []);

  const increment = () => {
    setCounter(counter + 1);
  };
  const changeData = () => {
    setData(!data);
  };

  return (
    <Container>
      <div>{counter}</div>
      <button onClick={() => increment()}>increment</button>
      <br />
      <br />
      <div>{data ? "true" : "false"}</div>
      <button onClick={() => changeData()}>click me</button>
    </Container>
  );
};
export default Posts;
