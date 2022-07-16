// Packages
import { useState } from "react";
import { ThemeProvider } from "styled-components";

// Components
import BackgroundImage from "./components/BackgroundImage";

// Styles and icons
import { GlobalStyles, lightTheme, darkTheme } from "./Global.styled";
import StyledContentWrapper from "./components/styles/ContentWrapper.styled";
import themeBtnLight from "./assets/icons/icon-sun.svg";
import themeBtnDark from "./assets/icons/icon-moon.svg";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BackgroundImage theme={theme} />
      <StyledContentWrapper>
        <header>
          <h1>T O D O</h1>
          <button type="button" onClick={toggleTheme}>
            <img
              src={theme === "light" ? themeBtnLight : themeBtnDark}
              alt="Dark Mode"
            />
          </button>
        </header>
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
