import styled from "styled-components";

import StyledButton from "../../assets/styles/Button.styled";

export const StyledHeader = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 2.6rem;
  }
`;

export const StyledToggleThemeButton = styled(StyledButton)`
  color: white;
  font-size: 1.2rem;
`;
