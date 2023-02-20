import styled from "styled-components";
import { rotateAnimation2, rotateAnimation1 } from "../../global/animation";

export const StyledContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 35%;
  transform: translate(-50%, -50%);
  background: ${(props) =>
    props.number
      ? "red;box-shadow:5px 5px 5px yellow"
      : "yellow;box-shadow:5px 5px 5px red"};
  animation: ${rotateAnimation2} 2s infinite;
`;
export const StyledCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  border-radius: 50%;
  transition: all 0.8s;
`;

export const StyledMainCircle = styled.div`
  position: relative;
  display: flex;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #333;
  animation: ${rotateAnimation2} 2s infinite;
`;

export const StyledCircle1 = styled(StyledCircle)`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.pallet.secondary};
  z-index: 2;
  animation: ${rotateAnimation1} 2s infinite;
`;

export const StyledCircle2 = styled(StyledCircle)`
  width: 50px;
  height: 50px;
  background-color: blue;
  z-index: 3;
  &:hover {
    transform: scale(1.1);
  }
  animation: ${rotateAnimation1} 2s infinite;
`;

export const StyledCircle3 = styled(StyledCircle)`
  width: 20px;
  height: 20px;
  background-color: black;
  z-index: 4;
  &:hover {
    transform: scale(1.1);
  }
  animation: ${rotateAnimation1} 2s infinite;
`;

export const StyledInput = styled("input")`
  background-color: ${({ value }) => (value >= 10 ? "red" : "")};
  margin-left: 20px;

  &.input-one {
    padding: 10px;
  }
  &.input-two {
    padding: 20px;
  }
`;
