import styled from "styled-components";

const StyledForm = styled.form`
  padding: 1.2rem 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;

  div {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.text_tertiary};
  }

  input {
    outline: none;
    border: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_main};
    background-color: ${({ theme }) => theme.bg_secondary};
  }
`;

export default StyledForm;
