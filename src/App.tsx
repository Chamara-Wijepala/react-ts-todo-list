// Packages
import { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

// Components
import BackgroundImage from "./layouts/BackgroundImage/BackgroundImage";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";

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
