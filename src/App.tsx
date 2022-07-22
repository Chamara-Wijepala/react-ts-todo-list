import { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import BackgroundImage from "./layouts/BackgroundImage/BackgroundImage";
import Header from "./layouts/Header/Header";
import Form from "./layouts/Form/Form";
import Main from "./layouts/Main/Main";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./assets/styles/Global.styled";
import StyledContentWrapper from "./assets/styles/ContentWrapper.styled";
import StyledMain from "./assets/styles/Main.styled";

import ITodo from "./interfaces";

function App() {
  const [theme, setTheme] = useState("light");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BackgroundImage theme={theme} />
      <StyledContentWrapper>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <StyledMain>
          <Form setTodoList={setTodoList} />
          <Main todoList={todoList} setTodoList={setTodoList} />
        </StyledMain>
      </StyledContentWrapper>
    </ThemeProvider>
  );
}

export default App;
