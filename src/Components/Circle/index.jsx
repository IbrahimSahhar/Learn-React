import React, { useState } from "react";
import {
  AnimatedDiv,
  StyledCircle1,
  StyledCircle2,
  StyledCircle3,
  StyledContainer,
  StyledInput,
  StyledMainCircle,
} from "./style";

const Circle = () => {
  const [color, setColor] = useState(false);
  const [number, setNumber] = useState(0);

  // setInterval(() => {
  //   setColor(!color);
  // }, 1000);
  return (
    <div>
      <StyledContainer number={color}>
        <div>
          <StyledMainCircle>
            <div>
              <StyledCircle1>
                <div>
                  <StyledCircle2>
                    <div>
                      <StyledCircle3>
                        <div></div>
                      </StyledCircle3>
                    </div>
                  </StyledCircle2>
                </div>
              </StyledCircle1>
            </div>
          </StyledMainCircle>
        </div>
      </StyledContainer>
      <StyledInput
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="input-one"
      />
    </div>
  );
};

export default Circle;
