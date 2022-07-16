import { StyledHeader, StyledToggleThemeButton } from "./styles/Header.styled";
import themeBtnLight from "../assets/icons/icon-sun.svg";
import themeBtnDark from "../assets/icons/icon-moon.svg";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

function Header({ theme, toggleTheme }: Props) {
  return (
    <StyledHeader>
      <h1>T O D O</h1>
      <StyledToggleThemeButton type="button" onClick={toggleTheme}>
        <img
          src={theme === "light" ? themeBtnLight : themeBtnDark}
          alt={theme === "light" ? "Dark Mode" : "Light Mode"}
        />
      </StyledToggleThemeButton>
    </StyledHeader>
  );
}

export default Header;
