import styled from "styled-components";

const StyledTodo = styled.div`
  padding: 1.2rem 1.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.text_tertiary};
`;

export default StyledTodo;
