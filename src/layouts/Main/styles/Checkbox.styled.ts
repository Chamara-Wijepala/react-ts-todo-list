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
  background-color: ${({ theme }) => theme.bg_secondary};
  border: 1px solid ${({ theme }) => theme.text_tertiary};
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledCheckboxActive = styled(StyledCheckbox)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #57ddff, #c058f3);
`;
