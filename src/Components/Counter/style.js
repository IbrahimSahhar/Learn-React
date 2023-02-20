import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: inline-block;
  background-color: #eee;
  color: blue;
  margin: 40px 20px 5px 5px;
  width: 250px;
  text-align: center;
  height: 250px;
  padding: 20px 0;
`;
export const StyledButton = styled.button`
  padding: 0.5rem !important;
  color: black;
  font-size: 15px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-weight: 800;
  border: none;
  cursor: pointer;
  background: ${(props) => (!props.counter ? "red" : "#333")};
`;
