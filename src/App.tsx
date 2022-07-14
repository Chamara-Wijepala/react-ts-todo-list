import GlobalStyles from "./assets/Global.styled";

const background = require("./assets/images/bg-mobile-light.jpg");

function App() {
  return (
    <>
      <GlobalStyles />
      <img src={background} alt="" />
    </>
  );
}

export default App;
