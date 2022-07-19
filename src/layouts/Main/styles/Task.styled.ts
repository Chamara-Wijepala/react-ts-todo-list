import styled from "styled-components";

export const StyledTask = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_main};
`;

export const StyledTaskComplete = styled(StyledTask)`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: line-through;
`;
