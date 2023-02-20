import { keyframes } from "styled-components";

export const rotateAnimation1 = keyframes`
from {
    transform: rotate(0);
}
to{
    transform: rotate(360deg);

}
`;

export const rotateAnimation2 = keyframes`
0%{
    transform: scale(1)
}
50%{
    transform: scale(1.2)

}
100%{
    transform: scale(1)

}
`;
