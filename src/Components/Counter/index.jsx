import React from "react";
import { StyledWrapper, StyledButton } from "./style.js";

const Counter = ({ increment, count = 0, decrement }) => {
  return (
    <StyledWrapper>
      <div>
        <StyledButton>
          <button style={{ padding: "0.5rem" }} onClick={increment}>
            increment
          </button>
        </StyledButton>
        <br />
        <span>counter : {count}</span>
        <br />
        <StyledButton counter={!count}>
          <button
            style={{ padding: "0.5rem" }}
            onClick={decrement}
            disabled={!count}
          >
            decrement
          </button>
        </StyledButton>
        <br />
        <br />
      </div>
    </StyledWrapper>
  );
};

export default Counter;
