import styled from "styled-components";

export const CheckboxContainer = styled.label`
  .HiddenCheckbox {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
  }
`;

export const StyledCheckbox = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  padding: 1px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.text_tertiary};
  cursor: pointer;

  :hover {
    background-image: linear-gradient(135deg, #57ddff, #c058f3);
  }

  div {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bg_secondary};
  }
`;

export const StyledCheckboxActive = styled(StyledCheckbox)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #57ddff, #c058f3);
`;
