import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text_main};
  font-size: 1rem;

  :hover {
    color: ${({ theme }) => theme.text_hover};
  }
`;

export default StyledButton;
