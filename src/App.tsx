// Packages
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Media from "react-media";

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "./Global.styled";
import StyledBackgroundImage from "./styles/BackgroundImage.styled";

// Images and icons
import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import bgMobileDark from "./assets/images/bg-mobile-dark.jpg";
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
      <Media queries={{ mobile: "(max-width: 375px)" }}>
        {(matches) =>
          matches.mobile ? (
            <StyledBackgroundImage
              height="200px"
              img={theme === "light" ? bgMobileLight : bgMobileDark}
            />
          ) : (
            <StyledBackgroundImage
              height="300px"
              img={theme === "light" ? bgDesktopLight : bgDesktopDark}
            />
          )
        }
      </Media>
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
