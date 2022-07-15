// Packages
import { useState } from "react";
import { ThemeProvider } from "styled-components";

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "./Global.styled";
import StyledBackgroundImage from "./styles/BackgroundImage.styled";

// Images and icons
import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
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
      <StyledBackgroundImage
        img={theme === "light" ? bgDesktopLight : bgDesktopDark}
      />
      <div>
        <header>
          <h1>T O D O</h1>
          <button type="button" onClick={toggleTheme}>
            <img
              src={theme === "light" ? themeBtnLight : themeBtnDark}
              alt="Dark Mode"
            />
          </button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
