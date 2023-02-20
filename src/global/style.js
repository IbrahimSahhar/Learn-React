import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
  margin: 0;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${(props) => props.theme.pallet.secondary}
}

code {
  font-family: 'Courier New',
    monospace;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

section {
  background-color: blanchedalmond;
  margin-top: 10px;
  padding: 20px 40px;
}

.active {
  border-bottom: 2px solid darkred;
  color: indianred !important;
}


`;
