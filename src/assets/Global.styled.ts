// @ts-ignore
import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bg_main: "hsl(0, 0%, 98%)",
  bg_secondary: "hsl(236, 33%, 92%)",
  text_main: "hsl(235, 19%, 35%)",
  text_secondary: "hsl(236, 9%, 61%)",
  text_tertiary: "hsl(233, 11%, 84%)",
  text_hover: "hsl(235, 19%, 35%)",
};

export const darkTheme: DefaultTheme = {
  bg_main: "hsl(235, 21%, 11%)",
  bg_secondary: "hsl(235, 24%, 19%)",
  text_main: "hsl(234, 39%, 85%)",
  text_secondary: "hsl(234, 11%, 52%)",
  text_tertiary: "hsl(233, 14%, 35%)",
  text_hover: "hsl(236, 33%, 92%)",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Josefin Sans', sans-serif;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.bg_main};
  }
`;
