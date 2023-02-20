import { useRoutes } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import routerPages from "./router";
import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
import { GlobalStyle } from "./global/style";

function App() {
  const router = useRoutes(routerPages);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {router}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
