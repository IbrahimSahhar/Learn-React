import styled from "styled-components";

export const Container = styled("div")`
  width: 80%;
  margin: auto;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.secondary};
`;
