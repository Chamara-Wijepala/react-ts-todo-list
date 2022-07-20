import { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import BackgroundImage from "./layouts/BackgroundImage/BackgroundImage";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./assets/styles/Global.styled";
import StyledContentWrapper from "./assets/styles/ContentWrapper.styled";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BackgroundImage theme={theme} />
      <StyledContentWrapper>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Main />
      </StyledContentWrapper>
    </ThemeProvider>
  );
}

export default App;
