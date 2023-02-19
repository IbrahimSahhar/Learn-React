import React from "react";
import "./style.css";
const Counter = ({ increment, count = 0, decrement }) => {
  return (
    <div>
      <button onClick={increment}>increment</button>
      <br />
      <span>counter : {count}</span>
      <br />
      <button onClick={decrement} disabled={!count}>
        decrement
      </button>
      <br />
      <br />
    </div>
  );
};

export default Counter;
