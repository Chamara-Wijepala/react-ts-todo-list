// Packages
import { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

// Components
import BackgroundImage from "./components/BackgroundImage";
import Header from "./components/Header";

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
        <main>
          <div className="Container">
            <form>
              <input type="text" placeholder="Create a new todo..." />
            </form>
          </div>
          <div className="Container">
            <div id="todo-list" />
            <div id="button-list">
              <p />
              <button type="button">Clear Completed</button>
            </div>
          </div>
          <div className="Container" id="filters">
            <button type="button">All</button>
            <button type="button">Active</button>
            <button type="button">Completed</button>
          </div>
        </main>
      </StyledContentWrapper>
    </ThemeProvider>
  );
}

export default App;
