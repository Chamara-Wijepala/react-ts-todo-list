// Packages
import { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

// Components
import BackgroundImage from "./components/BackgroundImage";
import Header from "./components/Header";
import Main from "./components/Main";

// Styled components
import { GlobalStyles, lightTheme, darkTheme } from "./Global.styled";
import StyledContentWrapper from "./components/styles/ContentWrapper.styled";

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
